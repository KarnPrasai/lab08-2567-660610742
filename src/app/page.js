import Header from "./component/Header";
import Footer from "./component/Footer";
import TaskInput from "./component/Taskinput";
import Task from "./component/Task";

export default function Home() {

  const tasks = [
    { id: 1, name: "Read a book", isDone: true },
    { id: 2, name: "Take a shower", isDone: false },
    { id: 3, name: "Sleep", isDone: false }
  ]

  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      {/* */}

      <Header/>
      

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />
        {/* task */}
        
        <Task props={{id: tasks[0].id,name: tasks[0].name, isDone: tasks[0].isDone }} />
        <Task props={{id: tasks[1].id,name: tasks[1].name, isDone: tasks[1].isDone }} />
        <Task props={{id: tasks[2].id,name: tasks[2].name, isDone: tasks[2].isDone }} />

      </div>

      {/* //footer section */}
      <Footer year = "2024" name = "Karn Prasai" studentID = "660610742"/>
    </div>
  );
}
