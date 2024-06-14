const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log('evento disparado');
    };

  return (
    <div>
        <button onClick={handleMyEvent} >Clique aqui</button>
    </div>
  );
};

export default Events;