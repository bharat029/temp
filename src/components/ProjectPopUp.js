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
                { project['p-desc-1'] && <p>{ project['p-desc-1'] }</p>}
                { project['p-desc-2'] && <p>{ project['p-desc-2'] }</p>}
                { project['p-desc-3'] && <p>{ project['p-desc-3'] }</p>}
            </dd>
            <dt><h4>Highlights: </h4></dt>
            <dd>
            <ul id="p-high">
                { project['p-high-1'] && <li>{ project['p-high-1'] }</li>}
                { project['p-high-2'] && <li>{ project['p-high-2'] }</li>}
                { project['p-high-3'] && <li>{ project['p-high-3'] }</li>}
                { project['p-high-4'] && <li>{ project['p-high-4'] }</li>}
                { project['p-high-5'] && <li>{ project['p-high-5'] }</li>}
            </ul>
            </dd>
        </dl>
        <a id="p-repo" href={project['p-repo']}>See Repository</a>
        </div>
    </div>
    )
}
