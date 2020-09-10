export {};
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const model = require('../schema/model');

//Verification Middleware
const verifyHelper = async (req: any, res: any, next: any) => {
  const {phone, password} = req.body;
  const queryText = 'SELECT * FROM helpers WHERE phone=$1';
  const queryResult = await model.query(queryText, [phone]);
  const [parsedResult] = queryResult.rows;
  if (parsedResult === undefined) {
    res.locals.isVerified = false;
    return next();
  }

  bcrypt.compare(
    password,
    parsedResult.password,
    (err: any, isMatch: boolean) => {
      if (err) return next(err);
      if (isMatch) {
        res.locals.isVerified = true;
        res.locals.id = parsedResult.id;
      } else {
        res.locals.isVerified = false;
      }
      return next();
    },
  );
};

const verifySenior = async (req: any, res: any, next: any) => {
  const {phone, password} = req.body;
  const queryText = 'SELECT * FROM seniors WHERE phone=$1';
  const queryResult = await model.query(queryText, [phone]);
  const [parsedResult] = queryResult.rows;
  if (parsedResult === undefined) {
    res.locals.isVerified = false;
    return next();
  }

  bcrypt.compare(
    password,
    parsedResult.password,
    (err: any, isMatch: boolean) => {
      if (err) return next(err);
      if (isMatch) {
        res.locals.isVerified = true;
        res.locals.id = parsedResult.id;
      } else {
        res.locals.isVerified = false;
      }
      return next();
    },
  );
};

//Router
router.post('/helper', verifyHelper, (req: any, res: any) => {
  res.status(200).json(res.locals);
});

router.post('/senior', verifySenior, (req: any, res: any) => {
  res.status(200).json(res.locals);
});

module.exports = router;
