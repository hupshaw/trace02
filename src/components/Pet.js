import pets from '../assets/dogs.jpg';
function Pet() {
  return (
    <div>
      <p>
        {" "}
        I have 2 dogs: Finn, 12, labradoodle (top) & Clementine, 15 months, mutt
      </p>
      <img
        src={pets}
      />
    </div>
  );
};

export default 'Pet';
