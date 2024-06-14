const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("evento disparado");
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui</button>
      </div>
      <div>
        <button onClick={() => console.log("clicou")}>click aqui tambem</button>
      </div>
    </div>
  );
};

export default Events;
