import Head from 'next/head'
import {DisplayItem} from '../components/display'
import React from "react";

const mainStack = [
  {url: "https://www.javascript.com/", hoverTxt: "JavaScript", img:"javascript-original.svg"},
  {url: "https://nodejs.org/", hoverTxt: "NodeJs", img:"nodejs-original.svg"},
  {url: "https://expressjs.com/", hoverTxt: "ExpressJS", img:"express-original.svg"},
  {url: "https://reactjs.org/", hoverTxt: "ReactJS", img:"react-original.svg"},
  {url: "https://git-scm.com/", hoverTxt: "Git", img:"git-original.svg"},
  {url: "https://github.com/", hoverTxt: "GitHub", img:"github-original.svg"},
  {url: "https://about.gitlab.com/", hoverTxt: "GitLab", img:"gitlab-original.svg"},
  {url: "https://www.npmjs.com/", hoverTxt: "NPM", img:"npm-original-wordmark.svg"},
  {url: "https://yarnpkg.com/", hoverTxt: "Yarn", img:"yarn-original.svg"},
  {url: "https://www.heroku.com/", hoverTxt: "Heroku", img:"heroku-original.svg"},
  {url: "https://firebase.google.com/", hoverTxt: "Firebase", img:"firebase.png"},
  {url: "https://hasura.io/", hoverTxt: "Hasura", img:"hasura_logo.svg"},
]


const learnStack = [
  {url: "https://cloud.google.com/", hoverTxt: "Google Cloud", img:"google-cloud.svg"},
  {url: "https://cloud.google.com/healthcare/", hoverTxt: "GCP Healthcare", img:"healthcare.png"},
  {url: "https://cloud.google.com/pubsub/", hoverTxt: "GCP Pub/Sub", img:"pub_sub.jpg"},
  {url: "https://cloud.google.com/dataflow/", hoverTxt: "GCP Dataflow", img:"dataflow.png"},
  {url: "https://www.python.org/", hoverTxt: "Python", img:"python-original.svg"},
  {url: "https://www.hl7.org/fhir/modules.html", hoverTxt: "FHIR", img:"fhir.png"},
  {url: "https://beam.apache.org/", hoverTxt: "Apache Beam", img:"beam_logo_circle.svg"},
  {url: "https://www.terraform.io/", hoverTxt: "Terraform", img:"terraform-vertical-color.png"},

]




const TechStack = ({stack}) => (<div className={"flex flex-row flex-wrap"}>
  {stack.map(item =>
    (<div className="p-4 flex flex-col justify-center align-center text-center text-espresso-light hover:text-espresso-dark"  >
        <a href={item.url} target="_blank" className="cursor-pointer"  rel="noreferrer noopener">
        <div className="bg-black absolute bg-opacity-0 hover:bg-opacity-50 opacity-0 hover:opacity-100 flex justify-center align-center" style={{height: 50, width: 50}}>
            <img src={"/svg/external-link-alt-solid.svg"} alt="open" height={20} width={20} />
        </div>
        </a>
        <img  src={`/stack/${item.img}`} height={50} width={50}/>
        <div className="text-xs  pt-2 w-full">{item.hoverTxt}</div>
      </div>
    ))}
</div>)

export default function Home() {
  return (
    <div className="font-nunito">
      <Head>
        <title>Kayla Kantola</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <div className="text-2xl lg:text-4xl text-espresso-dark">
          My name is Kayla Kantola, and I'm a software engineer.
        </div>
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-6 my-5 text-espresso-dark"}>

        <DisplayItem title={"Here's what I know how to use:"}>
          <TechStack stack={mainStack}/>

        </DisplayItem>

        <DisplayItem title={"Here's what I'm learning:"}>
          <TechStack stack={learnStack}/>

        </DisplayItem>

        </div>
      </main>
    </div>
  )
}
