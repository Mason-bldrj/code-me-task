import { Notifications } from "react-push-notification";

const App = () => {
  return (
    <div className="app">
      // Top of DOM tree
      <Notifications />
      <div className="row">
        <div className="content">Hello world.</div>
      </div>
    </div>
  );
};
export default App;
