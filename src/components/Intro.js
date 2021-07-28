import profile from '../assets/profile.jpg';
import chs from '../assets/charleston.jpg';

function Intro() {
  return (
    <div>
      <h1 class="font-black">Hey! I'm Helena Upshaw</h1>
      <br />
      <img
        src={profile}
        //style="display:block;"
      />

      <p>
        {" "}
        I'm in my final year at Clemson, pursuing a BA in Computer Science with
        a minor in Sustainability. I'm from Charleston, SC! (Peep the CHS harbor
        below.)
      </p>
      <img
        src={chs}
      />

      <p>
        {" "}
        Wanna be friends? Connect w/me on
        <a
          href="https://www.linkedin.com/in/helena-upshaw-6a7666171/"
        >
          {" "}
          LinkedIn
        </a>
      </p>
      <br />
    </div>
  );
}

export default Intro;
