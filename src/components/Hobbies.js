import books from '../assets/books.png';
import piano from '../assets/piano.jpg';
import code from '../assets/code.jpg';
function Hobbies() {
  return (
    <div>
      <ul class="grid p-10 gap-10">
        <li class="bg-white shadow rounded-lg overflow-hidden">
          <img src={books}/>
          <h1 class="font-bold">Recent Favorite Books</h1>
          <p>Untamed by Glennon Doyle & Doughnut Economics by Kate Raworth</p>
        </li>
        <li class="bg-white shadow rounded-lg overflow-hidden">
          <img src={piano} />
          <h1 class="font-black">Piano!</h1>
          <p>
            This summer, I've picked up piano again! Currently learning "Me & My
            Husband" by Mitski
          </p>
        </li>
        <li class="bg-white shadow rounded-lg overflow-hidden">
          <img src={code} />
          <h1 class="font-black">Women in Tech</h1>
          <p>
            Last year, I led classes teaching middle school Girl Scouts to code,
            using code.org's dance party!
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
