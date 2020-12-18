import React, { useState } from "react";
import "./styles.css";

const bookList = {
  Jobs: [
    {
      name: "Elevate labs",
      link: "https://www.elevatelabs.tech/"
    },

    {
      name: "Naukri.com",
      link: "https://www.naukri.com/mnjuser/homepage"
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com"
    },

    {
      name: "TimesJobs",
      link: "https://www.timesjobs.com"
    },

    {
      name: "Placement India",
      link: "https://www.placementindia.com"
    },
    {
      name: "Indeed",
      link: "https://www.indeed.co.in"
    },

    {
      name: "FreshersWorld.com",
      link: "https://www.freshersworld.com"
    },
    {
      name: "Click.in",
      link: "https://www.click.in"
    }
  ],

  Internships: [
    {
      name: "Internshala",
      link: "https://internshala.com"
    },

    {
      name: "Hello Intern",
      link: "https://www.hellointern.com/"
    },

    {
      name: "Angel List",
      link: "https://angel.co"
    },

    {
      name: "Lets Intern",
      link: "https://www.letsintern.com"
    }
  ],

  Freelancing: [
    {
      name: "UpWork",
      link: "https://www.upwork.com/"
    },
    {
      name: "Freelance India",

      link: "https://www.freelancer.in/work/freelance-india/"
    },

    {
      name: "Fiverr",

      link: "https://www.fiverr.com/"
    }
  ],

  Competitive_Programming: [
    {
      name: "Hacker Rank",
      link: "https://www.hackerrank.com/"
    },
    {
      name: "Code Chef",

      link: "https://www.codechef.com/"
    },
    {
      name: "Code Forces",

      link: "http://codeforces.com/"
    },

    {
      name: "Top Coder",

      link: "https://www.topcoder.com/"
    }
  ],

  "Learing Portals": [
    {
      name: "GeeksforGeeks",

      link: "https://www.geeksforgeeks.org/"
    },
    {
      name: "Udacity",
      link:
        "https://www.udacity.com/?utm_source=gsem_brand&utm_medium=ads&utm_campaign=920638067_c&utm_term=63844644663_in&utm_keyword=udacity_e&gclid=CjwKCAiAoOz-BRBdEiwAyuvA6z3WOKU5RgZ3v2Yg317KQ_0w8DfefMBfHN6RTxFZBhDRndU5zdPLoRoCbdYQAvD_BwE"
    },

    {
      name: "Udemy",
      link:
        "https://www.udemy.com/?deal_code=&utm_term=Homepage&utm_content=Textlink&utm_campaign=Rakuten-default&ranMID=39197&ranEAID=PPkX79%2Fc*b0&ranSiteID=PPkX79_c.b0-Heg8KSjm323hmEqSEy5b_A&LSNPUBID=PPkX79%2Fc*b0&utm_source=aff-campaign&utm_medium=udemyads"
    },

    {
      name: "edX",
      link: "https://www.edx.org/"
    }
  ]
};

export default function App() {
  var [recommendedSites, setSites] = useState("Jobs");
  function onClickBook(books) {
    setSites(books);
  }

  var lkm = Object.keys(bookList);

  return (
    <div className="App">
      <header>
        <h1 className="heading">Best Career Websites</h1>
        <h2 className="heading2">
          Looking for jobs,internships,or some freelancing platform? You are
          just at the right place!{" "}
        </h2>
      </header>
      <section className="section">
        <div>
          {lkm.map((sites) => (
            <button
              className="container"
              key={sites}
              onClick={() => onClickBook(sites)}
            >
              {sites}
            </button>
          ))}{" "}
        </div>
      </section>
      <div>
        {bookList[recommendedSites].map((sites) => {
          return (
            <ul className="container-Right">
              <li> {sites.name} </li>

              <a className="primary-link" href={sites.link}>
                {" "}
                Visit site{" "}
              </a>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
