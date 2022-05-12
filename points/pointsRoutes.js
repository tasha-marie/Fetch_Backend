const express = require("express");
const router = express.Router();

const moment = require("moment");

let totalPoints = {};
let distributedPoints = [];

router.get("/getPoints", (req, res) => {
  res.send(totalPoints);
});

router.post("/addPoints", (req, res) => {
  // push into distributedPoints and total points in totalPoints variables
  record = req.body;
  record.time = moment(record.time, "MM/DD/YYYY h:m a").toDate();

  distributedPoints.push(record);

  if (totalPoints[record.payer]) {
    totalPoints[record.payer] += record.points;
  } else {
    totalPoints[record.payer] = record.points;
  }

  res.send(totalPoints);
});

router.post("/deductPoints", (req, res) => {
  let sum = 0;
  let reqPoints = req.body.points;

  for (let val in totalPoints) {
    sum += totalPoints[val];
  }

  // check if points deducted is less than available points
  if (sum < reqPoints) {
    res.send({ message: "Not enough available points" });
  } else {
    // sort in descending order
    distributedPoints = distributedPoints.sort((a, b) => {
      return new Date(a.time) - new Date(b.time);
    });
    remaning = reqPoints;
    deductedJSON = {};

    // calculate deductable points
    for (let i = 0; i < distributedPoints.length; i++) {
      let deducted = 0;
      curPoints = distributedPoints[i];
      if (curPoints - remaining >= 0) {
        deducted = remaining;
        distributedPoints[i].points -= deducted;
      } else {
        deducted = curPoints.points;
        distributedPoints[i].points = 0;
      }
      deducted *= parseInt(-1);
      remaining += deducted;
      if (deductedJSON[curPoints.payer])
        deductedJSON[curPoints.payer] += deducted;
      else deductedJSON[curPoints.payer] = deducted;

      if (remaining <= 0) {
        // reset totalPoints to 0
        for (let k in totalPoints) {
          totalPoints[k] = 0;
        }

        // remove points used
        for (let j = 0; j < distributedPoints.length; j++) {
          if (distributedPoints[j].points == 0) {
            distributedPoints.splice(j, 1);
            j--;
          } else {
            if (totalPoints[distributedPoints[j].payer])
              totalPoints[distributedPoints[j].payer] +=
                distributedPoints[j].points;
            else
              totalPoints[distributedPoints[j].payer] =
                distributedPoints[j].points;
          }
        }
        // send response and break
        res.send(deductedJSON);
        break;
      }
    }
  }
});

module.exports = router;
