function Me() {
    return(
        <div className="flex ml-48 mt-28">
        <div class="h-200 w-200  ">
            <img class="rounded-full" src="./src/Image/ItsMe-removebg-preview.png" alt="" />
        </div>
        <div className="ml-20 mt-8">
            <h1 className="font-serif text-white-800 text-6xl">
                I am<br></br> Bishnupada Kamila
            </h1>
            <p class="font-sans text-white text-xl mt-6 w-[600px]">
                Skilled in Fullstack Development based on the tech stack: 
                Java, SpringBoot, React, Angular, Node, Express, MySQL, MongoDB.
                I am proficient in various programming languages and technologies.
            </p>
            <div class="flex items-center space-x-10 mt-10">
            <a
        href="./src/Component/Bishnupada Kamila(CV).pdf" // Update with your PDF path
        download="Bishnupada Kamila"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download PDF
      </a>
                <a href="https://github.com/bishnu-kamila"><img src="./src/Image/Git.png" alt="" class="h-10 w-10" /></a>
                <a href="https://www.linkedin.com/in/bishnupada-kamila-a16a19256"><img src="./src/Image/LinkedIn.webp" alt="" class="h-10 w-10" /></a>
                <a href="https://www.hackerrank.com/profile/bishnu_kamila_1"><img src="./src/Image/HackerRank.webp" alt="" class="h-10 w-10" /></a>
                <a href="https://www.codechef.com/users/bishnukamila1"><img src="./src/Image/Twiter.png" alt="" class="h-10 w-10" /></a>
            </div>

        </div>
        </div>
    )
}
export default Me