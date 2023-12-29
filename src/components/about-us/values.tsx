import React, { Key } from "react";

type Value = {
  id: Key;
  value: string;
  description: string;
};

const values: Value[] = [
  {
    id: 1,
    value: "Structure and process",
    description:
      "Our days of being code-cowboys are well behind us. These days we approach every task with a deliberate structure and process so it gets done properly.",
  },
  {
    id: 2,
    value: "Structure and process",
    description:
      "Our days of being code-cowboys are well behind us. These days we approach every task with a deliberate structure and process so it gets done properly.",
  },
  {
    id: 3,
    value: "Structure and process",
    description:
      "Our days of being code-cowboys are well behind us. These days we approach every task with a deliberate structure and process so it gets done properly.",
  },
  {
    id: 4,
    value: "Structure and process",
    description:
      "Our days of being code-cowboys are well behind us. These days we approach every task with a deliberate structure and process so it gets done properly.",
  },
  {
    id: 5,
    value: "Structure and process",
    description:
      "Our days of being code-cowboys are well behind us. These days we approach every task with a deliberate structure and process so it gets done properly.",
  },
  {
    id: 6,
    value: "Structure and process",
    description:
      "Our days of being code-cowboys are well behind us. These days we approach every task with a deliberate structure and process so it gets done properly.",
  },
];

const Values = () => {
  return (
    <div className="w-full pb-[200px] bg-bgColor">
      <div className="flex flex-col items-center justify-center mx-auto w-[80%]">
        <div className="w-full flex items-center justify-center md:justify-end px-6 mb-20">
          <h1 className="text-5xl font-extrabold text-center">Our Values</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-y-20 w-full mx-auto">
          {values.map((val) => (
            <div
              className="flex flex-col items-center my-8 mx-6 px-3 py-16 rounded-lg shadow-md"
              key={val.id}
            >
              <div className="px-5 mb-6">
                <h3 className="capitalize font-bold text-primary text-3xl">
                  {val.value}
                </h3>
              </div>
              <div className="px-10">
                <p>{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
