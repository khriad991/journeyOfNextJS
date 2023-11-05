import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Content from "@/components/Content/Content";

export default function Home() {
  return (
      <div>
          <div >
              <Navbar />
          </div>
          <div className="flex justify-between items-center p-1 gap-x-2">
              <Sidebar/>
              <Content/>
          </div>
      </div>

  )
}
