import{c as r,a as h,u as x,R as b,j as e,b as f,N as k,m as n,L as c}from"./index-BmVtggph.js";import v from"./Footer-9bH5A7UC.js";import{A as d}from"./arrow-left-BsSUsHbF.js";import{C as P}from"./calendar-bHkD1czX.js";import{C as w,T as j}from"./tag-BsX46G93.js";import{E as _}from"./external-link-CbzJfCek.js";import"./github-BSk350_j.js";import"./linkedin-QDcNJbee.js";import"./heart-CkVfZrfw.js";/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],N=r("Check",A);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],D=r("Copy",T);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],E=r("MessageCircle",I);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],C=r("Share2",S),F=[{id:1,slug:"getting-started-with-python",title:{en:"Getting Started with Python for Backend Development",es:"Comenzando con Python para Desarrollo Backend"},excerpt:{en:"A comprehensive guide to starting your backend development journey with Python, covering the fundamentals and best practices.",es:"Una guía completa para comenzar tu viaje de desarrollo backend con Python, cubriendo los fundamentos y mejores prácticas."},content:{en:`
# Getting Started with Python for Backend Development

Python has become one of the most popular languages for backend development, and for good reason. Its clean syntax, extensive libraries, and robust ecosystem make it an excellent choice for building scalable web applications.

## Why Choose Python for Backend Development?

### 1. Simplicity and Readability
Python's syntax is clean and intuitive, making it easy to write and maintain code. This is especially important in backend development where code needs to be robust and maintainable.

### 2. Rich Ecosystem
Python has an extensive collection of libraries and frameworks that can help you build almost anything:
- **Web Frameworks**: Django, FastAPI, Flask
- **Database ORMs**: SQLAlchemy, Django ORM
- **API Development**: FastAPI, Django REST Framework
- **Task Queues**: Celery, RQ

### 3. Performance and Scalability
While Python may not be the fastest language, it offers excellent performance for most web applications. With proper optimization and the right tools, Python can handle high-traffic applications.

## Setting Up Your Development Environment

Before we start coding, let's set up a proper development environment:

\`\`\`bash
# Install Python (if not already installed)
# On Windows: Download from python.org
# On macOS: brew install python
# On Linux: sudo apt-get install python3

# Create a virtual environment
python -m venv backend_env

# Activate the virtual environment
# On Windows:
backend_env\\Scripts\\activate
# On macOS/Linux:
source backend_env/bin/activate

# Install essential packages
pip install fastapi uvicorn sqlalchemy psycopg2-binary
\`\`\`

## Your First Backend API

Let's create a simple API using FastAPI:

\`\`\`python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="My Backend API", version="1.0.0")

# Data models
class User(BaseModel):
    id: Optional[int] = None
    name: str
    email: str

# In-memory storage (use a database in production)
users = []

@app.get("/")
async def root():
    return {"message": "Welcome to my Backend API"}

@app.post("/users/", response_model=User)
async def create_user(user: User):
    user.id = len(users) + 1
    users.append(user)
    return user

@app.get("/users/", response_model=List[User])
async def get_users():
    return users

@app.get("/users/{user_id}", response_model=User)
async def get_user(user_id: int):
    for user in users:
        if user.id == user_id:
            return user
    raise HTTPException(status_code=404, detail="User not found")
\`\`\`

## Best Practices

### 1. Use Virtual Environments
Always use virtual environments to isolate your project dependencies:

\`\`\`bash
python -m venv myproject_env
source myproject_env/bin/activate  # On Windows: myproject_env\\Scripts\\activate
\`\`\`

### 2. Follow PEP 8 Style Guide
Use tools like \`black\` and \`flake8\` to ensure your code follows Python style conventions:

\`\`\`bash
pip install black flake8
black your_file.py
flake8 your_file.py
\`\`\`

### 3. Use Type Hints
Type hints make your code more readable and help catch errors early:

\`\`\`python
from typing import List, Optional

def get_user_names(users: List[User]) -> List[str]:
    return [user.name for user in users]
\`\`\`

### 4. Handle Errors Gracefully
Always implement proper error handling:

\`\`\`python
from fastapi import HTTPException

@app.get("/users/{user_id}")
async def get_user(user_id: int):
    try:
        user = await database.fetch_user(user_id)
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        return user
    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal server error")
\`\`\`

## Next Steps

Now that you have a basic understanding of Python backend development:

1. **Learn a Framework**: Dive deeper into FastAPI, Django, or Flask
2. **Database Integration**: Learn SQLAlchemy or Django ORM
3. **Authentication**: Implement JWT authentication
4. **Testing**: Write tests using pytest
5. **Deployment**: Learn Docker and cloud deployment

Python backend development is a rewarding journey. Start with simple projects and gradually work your way up to more complex applications. The key is to practice consistently and build real-world projects.

Happy coding! 🐍
      `,es:`
# Comenzando con Python para Desarrollo Backend

Python se ha convertido en uno de los lenguajes más populares para el desarrollo backend, y por buena razón. Su sintaxis limpia, amplia biblioteca y ecosistema robusto lo convierten en una excelente opción para construir aplicaciones web escalables.

## ¿Por qué elegir Python para Desarrollo Backend?

### 1. Simplicidad y Legibilidad
La sintaxis de Python es limpia e intuitiva, haciendo fácil escribir y mantener código. Esto es especialmente importante en el desarrollo backend donde el código necesita ser robusto y mantenible.

### 2. Ecosistema Rico
Python tiene una extensa colección de bibliotecas y frameworks que pueden ayudarte a construir casi cualquier cosa:
- **Frameworks Web**: Django, FastAPI, Flask
- **ORMs de Base de Datos**: SQLAlchemy, Django ORM
- **Desarrollo de APIs**: FastAPI, Django REST Framework
- **Colas de Tareas**: Celery, RQ

### 3. Rendimiento y Escalabilidad
Aunque Python no sea el lenguaje más rápido, ofrece excelente rendimiento para la mayoría de aplicaciones web. Con la optimización adecuada y las herramientas correctas, Python puede manejar aplicaciones de alto tráfico.

## Configurando tu Entorno de Desarrollo

Antes de comenzar a codificar, configuremos un entorno de desarrollo adecuado:

\`\`\`bash
# Instalar Python (si no está instalado)
# En Windows: Descargar de python.org
# En macOS: brew install python
# En Linux: sudo apt-get install python3

# Crear un entorno virtual
python -m venv backend_env

# Activar el entorno virtual
# En Windows:
backend_env\\Scripts\\activate
# En macOS/Linux:
source backend_env/bin/activate

# Instalar paquetes esenciales
pip install fastapi uvicorn sqlalchemy psycopg2-binary
\`\`\`

## Tu Primera API Backend

Creemos una API simple usando FastAPI:

\`\`\`python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="Mi API Backend", version="1.0.0")

# Modelos de datos
class User(BaseModel):
    id: Optional[int] = None
    name: str
    email: str

# Almacenamiento en memoria (usa una base de datos en producción)
users = []

@app.get("/")
async def root():
    return {"message": "Bienvenido a mi API Backend"}

@app.post("/users/", response_model=User)
async def create_user(user: User):
    user.id = len(users) + 1
    users.append(user)
    return user

@app.get("/users/", response_model=List[User])
async def get_users():
    return users

@app.get("/users/{user_id}", response_model=User)
async def get_user(user_id: int):
    for user in users:
        if user.id == user_id:
            return user
    raise HTTPException(status_code=404, detail="Usuario no encontrado")
\`\`\`

## Mejores Prácticas

### 1. Usar Entornos Virtuales
Siempre usa entornos virtuales para aislar las dependencias de tu proyecto:

\`\`\`bash
python -m venv myproject_env
source myproject_env/bin/activate  # En Windows: myproject_env\\Scripts\\activate
\`\`\`

### 2. Seguir la Guía de Estilo PEP 8
Usa herramientas como \`black\` y \`flake8\` para asegurar que tu código siga las convenciones de estilo de Python:

\`\`\`bash
pip install black flake8
black your_file.py
flake8 your_file.py
\`\`\`

### 3. Usar Anotaciones de Tipo
Las anotaciones de tipo hacen tu código más legible y ayudan a detectar errores temprano:

\`\`\`python
from typing import List, Optional

def get_user_names(users: List[User]) -> List[str]:
    return [user.name for user in users]
\`\`\`

### 4. Manejar Errores Apropiadamente
Siempre implementa manejo de errores adecuado:

\`\`\`python
from fastapi import HTTPException

@app.get("/users/{user_id}")
async def get_user(user_id: int):
    try:
        user = await database.fetch_user(user_id)
        if not user:
            raise HTTPException(status_code=404, detail="Usuario no encontrado")
        return user
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error interno del servidor")
\`\`\`

## Próximos Pasos

Ahora que tienes un entendimiento básico del desarrollo backend con Python:

1. **Aprende un Framework**: Profundiza en FastAPI, Django, o Flask
2. **Integración de Base de Datos**: Aprende SQLAlchemy o Django ORM
3. **Autenticación**: Implementa autenticación JWT
4. **Testing**: Escribe pruebas usando pytest
5. **Despliegue**: Aprende Docker y despliegue en la nube

El desarrollo backend con Python es un viaje gratificante. Comienza con proyectos simples y gradualmente avanza hacia aplicaciones más complejas. La clave es practicar consistentemente y construir proyectos del mundo real.

¡Feliz programación! 🐍
      `},date:"2025-01-15",readTime:5,category:"Python",tags:["Python","Backend","Beginner","Programming"],featured:!0},{id:2,slug:"fastapi-vs-django",title:{en:"FastAPI vs Django: Choosing the Right Framework",es:"FastAPI vs Django: Eligiendo el Framework Correcto"},excerpt:{en:"Comparing two of the most popular Python web frameworks to help you make the right choice for your project.",es:"Comparando dos de los frameworks web de Python más populares para ayudarte a elegir el correcto para tu proyecto."},content:{en:"When building web applications with Python, two frameworks stand out: FastAPI and Django. Both are excellent choices, but they serve different purposes and have different strengths...",es:"Al construir aplicaciones web con Python, dos frameworks destacan: FastAPI y Django. Ambos son excelentes opciones, pero sirven diferentes propósitos y tienen diferentes fortalezas..."},date:"2025-01-10",readTime:8,category:"Frameworks",tags:["FastAPI","Django","Comparison","Web Development"],featured:!1}];function Q(){const{slug:p}=h(),{lang:a}=x(),[m,o]=b.useState(!1),t=F.find(s=>s.slug===p);if(!t)return e.jsx(f,{to:"/404",replace:!0});const u=s=>new Date(s).toLocaleDateString(a==="en"?"en-US":"es-ES",{year:"numeric",month:"long",day:"numeric"}),i=window.location.href,y=t.title[a],g=async()=>{try{await navigator.clipboard.writeText(i),o(!0),setTimeout(()=>o(!1),2e3)}catch(s){console.error("Failed to copy: ",s)}},l=()=>{const s=`https://twitter.com/intent/tweet?text=${encodeURIComponent(y)}&url=${encodeURIComponent(i)}`;window.open(s,"_blank")};return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900",children:[e.jsx(k,{}),e.jsx("main",{className:"pt-20 pb-20",children:e.jsxs("div",{className:"max-w-4xl mx-auto px-6",children:[e.jsx(n.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6},className:"mb-8",children:e.jsxs(c,{to:"/blog",className:"inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors",children:[e.jsx(d,{className:"w-4 h-4"}),a==="en"?"Back to Blog":"Volver al Blog"]})}),e.jsxs(n.header,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:"mb-12",children:[t.featured&&e.jsx("div",{className:"inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6",children:a==="en"?"Featured Post":"Post Destacado"}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent",children:t.title[a]}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed",children:t.excerpt[a]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(P,{className:"w-4 h-4"}),u(t.date)]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(w,{className:"w-4 h-4"}),t.readTime," ",a==="en"?"min read":"min lectura"]}),e.jsx("div",{className:"bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium",children:t.category})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8",children:t.tags.map(s=>e.jsxs("span",{className:"inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm",children:[e.jsx(j,{className:"w-3 h-3"}),s]},s))}),e.jsxs("div",{className:"flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl",children:[e.jsxs("div",{className:"flex items-center gap-2 text-gray-600 dark:text-gray-400",children:[e.jsx(C,{className:"w-4 h-4"}),e.jsx("span",{className:"text-sm font-medium",children:a==="en"?"Share:":"Compartir:"})]}),e.jsx("button",{onClick:l,className:"p-2 text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg transition-colors",title:"Share on Social Media",children:e.jsx(E,{className:"w-4 h-4"})}),e.jsx("button",{onClick:l,className:"p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg transition-colors",title:"Share Link",children:e.jsx(_,{className:"w-4 h-4"})}),e.jsx("button",{onClick:g,className:"p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",title:a==="en"?"Copy link":"Copiar enlace",children:m?e.jsx(N,{className:"w-4 h-4 text-green-500"}):e.jsx(D,{className:"w-4 h-4"})})]})]}),e.jsx(n.article,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},className:"prose prose-lg dark:prose-invert max-w-none",children:e.jsx("div",{className:"leading-relaxed",dangerouslySetInnerHTML:{__html:t.content[a].replace(/\n/g,"<br />")}})}),e.jsx(n.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},className:"mt-16 pt-8 border-t border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs(c,{to:"/blog",className:"inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors font-medium",children:[e.jsx(d,{className:"w-4 h-4"}),a==="en"?"More Posts":"Más Posts"]}),e.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:a==="en"?"Thanks for reading!":"¡Gracias por leer!"})]})})]})}),e.jsx(v,{})]})}export{Q as default};
