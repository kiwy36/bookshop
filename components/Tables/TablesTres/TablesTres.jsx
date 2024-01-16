import { useState } from 'react'
import PropTypes from 'prop-types';
import './TablesTres.css';
const CopyButton = ({ text, onCopy }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    onCopy();
  };

  return (
    <button className="copy-button" onClick={copyToClipboard}>
      Copiar Texto
    </button>
  );
};

CopyButton.propTypes = {
  text: PropTypes.string.isRequired,
  onCopy: PropTypes.func.isRequired,
};

const TableElemento = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPriority, setTaskPriority] = useState('low');
  const [taskDueDate, setTaskDueDate] = useState('');
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = () => {
    if (taskName && taskDueDate) {
      const newTask = {
        name: taskName,
        description: taskDescription,
        priority: taskPriority,
        dueDate: taskDueDate,
      };
  
      // Ordena la lista de tareas por prioridad y fecha
      const updatedTasks = [...tasks, newTask].sort((a, b) => {
        const priorityOrder = { high: 1, medium: 2, low: 3 };
  
        if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        } else {
          return new Date(a.dueDate) - new Date(b.dueDate);
        }
      });
      // Actualiza las tareas con la nueva tarea
      setTasks(updatedTasks);
      // Limpia los campos de entrada
      setTaskName('');
      setTaskDescription('');
      setTaskPriority('low');
      setTaskDueDate('');
    }
  };
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };
  const completeTask = (index) => {
    const completedTask = tasks[index];

    // Agrega la tarea completada a la lista de tareas terminadas
    setCompletedTasks([...completedTasks, { name: completedTask.name, completedDate: new Date() }]);

    // Elimina la tarea completada de la lista de tareas pendientes
    setTasks(tasks.filter((_, i) => i !== index));
  };
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'low':
        return 'blue';
      case 'medium':
        return 'green';
      case 'high':
        return 'red';
      default:
        return 'black';
    }
  };
  
  return (
    <div>
      {/* Input y botones para agregar tarea */}
      <div className='task-inputs'>
        <input
          type='text'
          placeholder='Nombre de la tarea'
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Descripción de la tarea'
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <select value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)}>
          <option value='low'>Baja</option>
          <option value='medium'>Media</option>
          <option value='high'>Alta</option>
        </select>
        <input
          type='date'
          placeholder='Fecha límite'
          value={taskDueDate}
          onChange={(e) => setTaskDueDate(e.target.value)}
        />

        <button onClick={addTask}>Agregar Tarea</button>
      </div>

      {/* Tabla de tareas pendientes */}
      <table className='task-table'>
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Descripción</th>
            <th>Prioridad</th>
            <th>Fecha Límite</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td style={{ color: getPriorityColor(task.priority) }}>
                {task.priority === 'low' ? 'Baja' : task.priority === 'medium' ? 'Media' : 'Alta'}
              </td>
              <td>{formatDate(task.dueDate)}</td>
              <td>
                <button onClick={() => completeTask(index)}>Tarea Terminada</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Tabla de tareas completadas */}
      <div className='completed-tasks'>
        <h2>Tareas Completadas</h2>
        <ul>
          {completedTasks.map((completedTask, index) => (
            <li key={index}>
              {completedTask.name} - Concretada el {completedTask.completedDate.toLocaleDateString('es-ES')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const TablesTres = () => {
  const [isReactCodeOpen, setIsReactCodeOpen] = useState(false);
  const [isCssCodeOpen, setIsCssCodeOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(true);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleToggleReactCode = () => {
    setIsReactCodeOpen(!isReactCodeOpen);
    setIsCssCodeOpen(false);
    setIsInfoOpen(false);
  };

  const handleToggleCssCode = () => {
    setIsReactCodeOpen(false);
    setIsCssCodeOpen(!isCssCodeOpen);
    setIsInfoOpen(false);
  };

  const handleToggleInfo = () => {
    setIsInfoOpen(!isInfoOpen);
    setIsReactCodeOpen(false);
    setIsCssCodeOpen(false);
  };

  const handleCopy = (contentToCopy) => {
    navigator.clipboard.writeText(contentToCopy);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
  };

  const infoContent = `
  1. Crear un nuevo archivo llamado 'TablesElemento.js'.

  2. Importar 'useState' desde React.

  3. Establecer estados iniciales con 'useState' para 'tasks', 'taskName', 'taskDescription', 'taskPriority', 'taskDueDate', y 'completedTasks'.

  4. Implementar funciones: 'addTask', 'formatDate', 'completeTask', y 'getPriorityColor'.

  5. Renderizar elementos HTML utilizando estados y funciones para gestionar tareas.

  6. Crear un archivo de estilo (por ejemplo, 'TablesTres.css') para definir estilos.

  7. Importar el archivo de estilo al inicio de 'TablesElemento.js'.

  8. Integrar el componente en la aplicación React y probar con al menos 10 tareas.

  9. Aplicar media queries para mejorar la visualización en dispositivos móviles.

  10. Exportar el componente al final del archivo con 'export default TablesElemento;'.
  `;
  const buttonCode = `
    import { useState } from 'react'
    import './TablesTres.css';
    const TableElemento = () => {
      const [tasks, setTasks] = useState([]);
      const [taskName, setTaskName] = useState('');
      const [taskDescription, setTaskDescription] = useState('');
      const [taskPriority, setTaskPriority] = useState('low');
      const [taskDueDate, setTaskDueDate] = useState('');
      const [completedTasks, setCompletedTasks] = useState([]);

      const addTask = () => {
        if (taskName && taskDueDate) {
          const newTask = {
            name: taskName,
            description: taskDescription,
            priority: taskPriority,
            dueDate: taskDueDate,
          };
      
          // Ordena la lista de tareas por prioridad y fecha
          const updatedTasks = [...tasks, newTask].sort((a, b) => {
            const priorityOrder = { high: 1, medium: 2, low: 3 };
      
            if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
              return priorityOrder[a.priority] - priorityOrder[b.priority];
            } else {
              return new Date(a.dueDate) - new Date(b.dueDate);
            }
          });
          // Actualiza las tareas con la nueva tarea
          setTasks(updatedTasks);
          // Limpia los campos de entrada
          setTaskName('');
          setTaskDescription('');
          setTaskPriority('low');
          setTaskDueDate('');
        }
      };
      const formatDate = (dateString) => {
        const [year, month, day] = dateString.split('-');
        return '${'day'}/${'month'}/${'year'}';
      };
      const completeTask = (index) => {
        const completedTask = tasks[index];

        // Agrega la tarea completada a la lista de tareas terminadas
        setCompletedTasks([...completedTasks, { name: completedTask.name, completedDate: new Date() }]);

        // Elimina la tarea completada de la lista de tareas pendientes
        setTasks(tasks.filter((_, i) => i !== index));
      };
      const getPriorityColor = (priority) => {
        switch (priority) {
          case 'low':
            return 'blue';
          case 'medium':
            return 'green';
          case 'high':
            return 'red';
          default:
            return 'black';
        }
      };
      
      return (
        <div>
          {/* Input y botones para agregar tarea */}
          <div className='task-inputs'>
            <input
              type='text'
              placeholder='Nombre de la tarea'
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <input
              type='text'
              placeholder='Descripción de la tarea'
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
            <select value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)}>
              <option value='low'>Baja</option>
              <option value='medium'>Media</option>
              <option value='high'>Alta</option>
            </select>
            <input
              type='date'
              placeholder='Fecha límite'
              value={taskDueDate}
              onChange={(e) => setTaskDueDate(e.target.value)}
            />

            <button onClick={addTask}>Agregar Tarea</button>
          </div>

          {/* Tabla de tareas pendientes */}
          <table className='task-table'>
            <thead>
              <tr>
                <th>Tarea</th>
                <th>Descripción</th>
                <th>Prioridad</th>
                <th>Fecha Límite</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.name}</td>
                  <td>{task.description}</td>
                  <td style={{ color: getPriorityColor(task.priority) }}>
                    {task.priority === 'low' ? 'Baja' : task.priority === 'medium' ? 'Media' : 'Alta'}
                  </td>
                  <td>{formatDate(task.dueDate)}</td>
                  <td>
                    <button onClick={() => completeTask(index)}>Tarea Terminada</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Tabla de tareas completadas */}
          <div className='completed-tasks'>
            <h2>Tareas Completadas</h2>
            <ul>
              {completedTasks.map((completedTask, index) => (
                <li key={index}>
                  {completedTask.name} - Concretada el {completedTask.completedDate.toLocaleDateString('es-ES')}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    };
    export default TablesElemento
    `;
  const buttonCss = `
  .task-inputs {
    display: flex;
    margin-bottom: 20px;
  }
  
  .task-inputs input,
  .task-inputs select,
  .task-inputs button {
    margin-right: 10px;
    padding: 8px;
  }
  
  .task-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  
  .task-table th, .task-table td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }
  
  .task-table th {
    background-color: #181818;
  }
  
  .completed-tasks {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .completed-tasks h2 {
    margin-bottom: 10px;
  }
  
  .completed-tasks ul {
    list-style-type: none;
    padding: 0;
  }
  
  .completed-tasks li {
    border-bottom: 1px solid #ddd;
    padding: 10px;
  }
  @media only screen and (max-width: 600px) {
    .task-inputs {
      flex-direction: column;
      margin-bottom: 10px;
    }
  
    .task-inputs input,
    .task-inputs select,
    .task-inputs button {
      margin-right: 0;
      margin-bottom: 10px;
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
    }
  
    .task-table th,
    .task-table td {
      font-size: 14px;
      padding: 6px;
    }
  }
  `;

  return (
    <section>
      <div className="card">
        <div className="card-content">
          <h1 className='table-title'>Tabla dinamica de tareas</h1>
          <TableElemento/>
          <div className="buttons-sections">
            <div className="section-button" onClick={handleToggleInfo}>
              Información
            </div>
            <div className="section-button" onClick={handleToggleReactCode}>
              Código React
            </div>
            <div className="section-button" onClick={handleToggleCssCode}>
              Código CSS
            </div>
          </div>
          {isReactCodeOpen && (
            <div className="code-section">
              <pre>{`${buttonCode}`}</pre>
              <CopyButton text={buttonCode} onCopy={() => handleCopy(buttonCode)} />
            </div>
          )}
          {isCssCodeOpen && (
            <div className="code-section">
              <pre>{buttonCss}</pre>
              <CopyButton text={buttonCss} onCopy={() => handleCopy(buttonCss)} />
            </div>
          )}
          {isInfoOpen && (
            <div className="info-section">
              <p>{infoContent}</p>
            </div>
          )}
          {copySuccess && <p className="copy-notice">Texto copiado al portapapeles</p>}
        </div>
      </div>
    </section>
  );
};


export default TablesTres