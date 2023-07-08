import React, { useState } from "react";
import "./ListDifferences.css";

const ListDifferences = () => {
  const [listA, setListA] = useState("");
  const [listB, setListB] = useState("");
  const [differences, setDifferences] = useState({
    itemsOnlyInA: [],
    itemsOnlyInB: [],
    itemsInBoth: [],
    combinedItems: [],
  });

  const computeDifferences = () => {
    const arrA = listA.split("\n").map((item) => item.trim());
    const arrB = listB.split("\n").map((item) => item.trim());

    const itemsOnlyInA = arrA.filter((item) => !arrB.includes(item));
    const itemsOnlyInB = arrB.filter((item) => !arrA.includes(item));
    const itemsInBoth = arrA.filter((item) => arrB.includes(item));
    const combinedItems = [...new Set([...arrA, ...arrB])];

    setDifferences({
      itemsOnlyInA,
      itemsOnlyInB,
      itemsInBoth,
      combinedItems,
    });
  };

  return (
    <div className="list-differences">
      <h1 className="title">COMPARER</h1>
      <h3 className="bio"> Compare And get Results Below </h3>
      <div className="input-container">
        <h3>List A:</h3>
        <textarea
          rows="10"
          value={listA}
          placeholder="Enter here...."
          onChange={(e) => setListA(e.target.value)}
        />
      </div>

      <div className="input-container">
        <h3>List B:</h3>
        <textarea
          rows="10"
          value={listB}
          placeholder="Enter here...."
          onChange={(e) => setListB(e.target.value)}
        />
      </div>

      <button className="compute-button" onClick={computeDifferences}>
        Compute
      </button>

      <div className="result-container">
        <div>
          <h3>Items present only in A:</h3>
          {differences.itemsOnlyInA.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>

        <div>
          <h3>Items present only in B:</h3>
          {differences.itemsOnlyInB.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>

        <div>
          <h3>Items present in both A and B:</h3>
          {differences.itemsInBoth.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>

        <div>
          <h3>Items combining both A and B (unique):</h3>
          {differences.combinedItems.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListDifferences;
