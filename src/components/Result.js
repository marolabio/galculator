import React from "react";

const Result = ({ value }) => {
  let formattedValue = parseFloat(value).toLocaleString({
    useGrouping: true,
    maximumFractionDigits: 6
  });

  // Add back missing .0 in e.g. 12.0
  const match = value.match(/\.\d*?(0*)$/);

  if (match) formattedValue += /[1-9]/.test(match[0]) ? match[1] : match[0];

  return (
    <div className="result">
      <input type="text" value={formattedValue} readOnly />
    </div>
  );
};

export default Result;
