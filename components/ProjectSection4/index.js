import React from "react";
import Link from "next/link";
import css from './ProjectSection4.module.css'

export default function ProjectsSection4() {
  return (
    //   Grid for project section 4
    <div class="grid gap-0 grid-cols-1 md:grid-cols-6 grid-rows-1 place-items-center content-center border-solid border-2 border-black rounded-lg mb-12 mt-8 pb-[150px] pt-[50px] pl-5 pr-5">
    
      {/* Text box for project 4 */}
      <div class="col-span-3 content-center place-items-center md:mx-40" className={css.proj1Left}>
      <div className={css.projectTextBox}>
        <h2 className={css.projectTitle}>Music Sales App</h2>
        <h3 className={css.projectDescription}>This is an app I built during an internship with the company Vista Health between January - June 2024. The app was developed for (and in conjunction with) a large blue chip pharmaceutical company, in order to display their global sales information. I built the frontend of this app completely independently using VanillaJS and Chart.js charting library. The backend of the application was created using Amazon AWS. This application was designed to be viewed on desktop – due to the complex graphical data it displays. (Although it is possible to view it on mobile – the user may not be able to see the data clearly on small devices). </h3>
        <Link
          href="https://github.com/Babyoilrig/musicSalesApp"
          passHref
        >
          <button className={css.projectButton}>View Project</button>
        </Link>
      </div>
      </div>
      {/* Image box for project4 */}
      <div class="col-span-3 content-center place-items-center md:mx-40" >
      <div className={css.projectImageBox}>
        <img
          className={css.musicSalesAppImage}
          src="/images/music-sales-app-image.png"
        />
      </div>
      </div>
    </div>
  );
}
