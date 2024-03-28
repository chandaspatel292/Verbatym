import { StatusBar } from "expo-status-bar";

import Homepage from "./components/HomePage";



export default function App() {
  return (
    <>
      <Homepage />
    
      <StatusBar style="light" translucent={false} />
    </>
  );
}
