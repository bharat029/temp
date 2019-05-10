import React from 'react'

export default function ProjectPopUp({project, closePopUp}) {
  return (
    <div id="project">
        <div id="project-content">
        <span id="close" onClick={closePopUp}>&times;</span>
        <h2 id="p-title">{project['p-title']}</h2>
        <iframe id="p-demo" title={project['p-title']} src={"https://www.youtube.com/embed/" + project['p-demo']} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>            
        <dl>
            <dt><h4>Description:</h4></dt>
            <dd id="p-desc">
            {
                project['p-desc'].map((desc, idx) => <p key={idx}>{desc}</p>)
            }
            </dd>
            <dt><h4>Highlights: </h4></dt>
            <dd>
            <ul id="p-high">
                {
                project['p-high'].map((highl, idx) => <li key={idx}>{highl}</li>)
                }
            </ul>
            </dd>
        </dl>
        <a id="p-repo" href={project['p-repo']}>See Repository</a>
        </div>
    </div>
    )
}
