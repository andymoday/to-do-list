(()=>{"use strict";function t(){document.getElementById("project-form").style.display="none"}function e(){document.getElementById("todo-form").style.display="none"}const n=function(){let t=[];return{getprojectContainer:function(){return t},addProjectToContainer:function(e){return t.push(e),t},delProjectFromContainer:function(e){let n=t.indexOf(e);return t.splice(n,1),t}}}();class r{constructor(t,e,n,r,o){this.projectName=t,this.projectDesc=e,this.projectPriority=n,this.projectDueDate=r,this.projectTodos=o}getProjectName(){return this.projectName}getProjectDesc(){return this.projectDesc}getProjectPriority(){return this.projectPriority}getProjectDueDate(){return this.projectDueDate}getProjectTodos(){return this.projectTodos}setProjectName(t){return this.projectName=t,this.projectName}setProjectDesc(t){return this.projectDesc=t,this.projectDesc}setProjectPriority(t){return this.projectPriority=t,this.projectPriority}setProjectDueDate(t){return this.projectDueDate=t,this.projectDueDate}setProjectTodos(t){return this.projectTodos=t,this.projectTodos}}const o=function(){let t=[];return{getProjects:function(){return t},addProject:function(e){return t.push(e),t},delProject:function(e){let n=t.indexOf(e);return t.splice(n,1),t}}}();function i(){let t=document.getElementById("p-name").value,e=document.getElementById("p-priority").value;return function(t,e,n,i){let d=new r(t,e,n,i);o.addProject(d)}(t,document.getElementById("p-description").value,e,document.getElementById("p-dueDate").value),function(t){const e=o.getProjects()[t],r=document.getElementById("project-container");let i=document.createElement("div");i.setAttribute("class","project");let d=document.createElement("div");d.setAttribute("class","project-name"),d.textContent=e.getProjectName(),i.appendChild(d);let c=document.createElement("div");c.setAttribute("class","project-description"),c.textContent=e.getProjectDesc(),i.appendChild(c);let l=document.createElement("div");l.setAttribute("class","project-priority"),l.textContent=e.getProjectPriority(),i.appendChild(l);let u=document.createElement("div");u.setAttribute("class","project-date"),u.textContent=e.getProjectDueDate(),i.appendChild(u);let s=document.createElement("div");s.setAttribute("class","project-todos"),s.textContent=e.getProjectTodos(),i.appendChild(s),n.addProjectToContainer(i),r.append(i)}(o.getProjects().length-1),d(),!1}function d(){document.getElementById("p-name").value=null,document.getElementById("p-priority").value="Low",document.getElementById("p-description").value=null,document.getElementById("p-dueDate").value=null}!function(){let n=document.getElementById("content"),r=document.createElement("container");r.setAttribute("id","project-container"),n.appendChild(r);let o=document.createElement("dropdown");o.setAttribute("class","dropdown"),n.appendChild(o);let d=document.createElement("button");d.setAttribute("class","dropbtn"),o.appendChild(d);let c=document.createElement("i");c.setAttribute("class","fas fa-plus"),d.appendChild(c);let l=document.createElement("div");l.setAttribute("class","dropdown-content"),d.appendChild(l);let u=document.createElement("a");u.setAttribute("id","addP"),u.setAttribute("href","#"),u.textContent="Project",l.appendChild(u);let s=document.createElement("a");s.setAttribute("id","addT"),s.setAttribute("href","#"),s.textContent="Todo",l.appendChild(s);let a=document.createElement("form");a.setAttribute("id","project-form"),a.setAttribute("class","form-container"),a.style.display="none",a.onsubmit=i,r.appendChild(a);let p=document.createElement("label");p.setAttribute("for","name"),p.textContent="Name: ",a.appendChild(p);let m=document.createElement("input");m.setAttribute("type","text"),m.setAttribute("id","p-name"),m.setAttribute("name","name"),a.appendChild(m);let b=document.createElement("label");b.setAttribute("for","p-priority"),b.textContent="Priority: ",a.appendChild(b);let A=document.createElement("select");A.setAttribute("class","p-form-dropdown"),A.setAttribute("name","p-priority"),A.setAttribute("id","p-priority"),a.appendChild(A);let h=document.createElement("option");h.setAttribute("id","p-low"),h.setAttribute("value","Low"),h.textContent="Low",A.appendChild(h);let C=document.createElement("option");C.setAttribute("id","p-medium"),C.setAttribute("value","Medium"),C.textContent="Medium",A.appendChild(C);let j=document.createElement("option");j.setAttribute("id","p-high"),j.setAttribute("value","High"),j.textContent="High",A.appendChild(j);let E=document.createElement("label");E.setAttribute("for","description"),E.textContent="Description: ",a.appendChild(E);let y=document.createElement("textarea");y.setAttribute("type","text"),y.setAttribute("id","p-description"),y.setAttribute("name","description"),y.setAttribute("rows","4"),y.setAttribute("cols","43"),a.appendChild(y);let f=document.createElement("label");f.setAttribute("for","dueDate"),f.textContent="Due Date: ",a.appendChild(f);let g=document.createElement("input");g.setAttribute("type","date"),g.setAttribute("id","p-dueDate"),g.setAttribute("name","dueDate"),a.appendChild(g);let P=document.createElement("button");P.setAttribute("type","submit"),P.setAttribute("class","btn submit"),P.onclick=t,P.textContent="Submit",a.appendChild(P);let D=document.createElement("button");D.setAttribute("type","button"),D.setAttribute("class","btn submit"),D.onclick=t,D.textContent="Cancel",a.appendChild(D);let x=document.createElement("form");x.setAttribute("id","todo-form"),x.setAttribute("class","form-container"),x.style.display="none",r.appendChild(x);let v=document.createElement("label");v.setAttribute("for","name"),v.textContent="Name: ",x.appendChild(v);let w=document.createElement("input");w.setAttribute("type","text"),w.setAttribute("id","t-name"),w.setAttribute("name","name"),x.appendChild(w);let B=document.createElement("label");B.setAttribute("for","t-priority"),B.textContent="Priority: ",x.appendChild(B);let I=document.createElement("select");I.setAttribute("class","t-form-dropdown"),I.setAttribute("name","t-priority"),I.setAttribute("id","t-priority"),x.appendChild(I);let T=document.createElement("option");T.setAttribute("id","t-low"),T.setAttribute("value","Low"),T.textContent="Low",I.appendChild(T);let N=document.createElement("option");N.setAttribute("id","t-medium"),N.setAttribute("value","Medium"),N.textContent="Medium",I.appendChild(N);let k=document.createElement("option");k.setAttribute("id","t-high"),k.setAttribute("value","High"),k.textContent="High",I.appendChild(k);let L=document.createElement("label");L.setAttribute("for","description"),L.textContent="Description: ",x.appendChild(L);let H=document.createElement("textarea");H.setAttribute("type","text"),H.setAttribute("id","t-description"),H.setAttribute("name","description"),H.setAttribute("rows","4"),H.setAttribute("cols","43"),x.appendChild(H);let M=document.createElement("label");M.setAttribute("for","dueDate"),M.textContent="Due Date: ",x.appendChild(M);let O=document.createElement("input");O.setAttribute("type","date"),O.setAttribute("id","t-dueDate"),O.setAttribute("name","dueDate"),x.appendChild(O);let S=document.createElement("label");S.setAttribute("for","project"),S.textContent="Project: ",x.appendChild(S);let F=document.createElement("select");F.setAttribute("class","t-form-dropdown"),F.setAttribute("name","project"),F.setAttribute("id","t-project"),x.appendChild(F);let q=document.createElement("button");q.setAttribute("type","submit"),q.setAttribute("class","btn submit"),q.onclick=e,q.textContent="Submit",x.appendChild(q);let z=document.createElement("button");z.setAttribute("type","button"),z.setAttribute("class","btn submit"),z.onclick=e,z.textContent="Cancel",x.appendChild(z)}(),document.getElementById("addP").addEventListener("click",(()=>{d(),document.getElementById("project-form").style.display="block"})),document.getElementById("addT").addEventListener("click",(()=>{document.getElementById("todo-form").style.display="block"}))})();