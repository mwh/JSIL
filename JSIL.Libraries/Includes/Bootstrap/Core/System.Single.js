﻿// #include_once "Bootstrap/Core/Utils/$jsilcore.$MakeParseExternals.js"
// #include_once "Bootstrap/Core/Utils/$jsilcore.$ParseFloat.js"

JSIL.ImplementExternals(
  "System.Single", function ($) {
    $.RawMethod(true, "CheckType", function (value) {
      return (typeof (value) === "number");
    });

    $jsilcore.$MakeParseExternals($, $.Single, $jsilcore.$ParseFloat, $jsilcore.$TryParseFloat);

    $.Constant({ Public: true, Static: true }, "MinValue", -3.4028234663852886E+38);
    $.Constant({ Public: true, Static: true }, "Epsilon", 1.4012984643248171E-45);
    $.Constant({ Public: true, Static: true }, "MaxValue", 3.4028234663852886E+38);
    $.Constant({ Public: true, Static: true }, "PositiveInfinity", Infinity);
    $.Constant({ Public: true, Static: true }, "NegativeInfinity", -Infinity);
    $.Constant({ Public: true, Static: true }, "NaN", NaN);
  }
);
JSIL.MakeNumericType(Number, "System.Single", false, "Float32Array");