import React, { useState } from "react";
import MyComponent from "./MyComponent";
import Form from "./Form";
import initialimage from "./assets/initialimage.png";

const App = () => {
  const [image, setImage] = useState(initialimage);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [code, setCode] = useState("");
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    const url = URL.createObjectURL(selectedFile);
    setImage(url);
  };
  return (
    <>
      <p className="h-[8px] my-2 w-[100%] bg-[#F5C877]"></p>
      <div className="flex  gap-4 md:flex-row flex-col justify-around  items-center ">
        <Form
          handleImageChange={handleImageChange}
          name={name}
          setName={setName}
          category={category}
          code={code}
          setCode={setCode}
          setCategory={setCategory}
        />
        <MyComponent
          image={image}
          name={name}
          category={category}
          setCategory={setCategory}
          code={code}
          setCode={setCode}
          setName={setName}
          setImage={setImage}
        />
      </div>
    </>
  );
};

export default App;
