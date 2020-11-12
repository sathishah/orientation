// Import stylesheets
import "./style.css";

function getDeviceOrientation(): "portrait" | "landscape" {
  if ((window.screen as any).orientation) {
    return (window.screen as any).orientation.type.includes("landscape")
      ? "landscape"
      : "portrait";
  }

  // iOS/safari
  return Math.abs(+window.orientation) === 90 ? "landscape" : "portrait";
}

function getDeviceWidth(): number {
  const deviceOrientation = getDeviceOrientation();

  return deviceOrientation === "portrait"
    ? Math.max(document.documentElement!.clientWidth, window.innerWidth || 0)
    : Math.max(document.documentElement!.clientHeight, window.innerHeight || 0);
}

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");

const data = {
  orientationBase: window.orientation,
  orientation: getDeviceOrientation(),
  deviceWidth: getDeviceWidth()
};

appDiv.innerHTML = `${JSON.stringify(data)}`;
console.log("Testing the device orientation - 2");

window.addEventListener("orientationchange", function(event) {
  //event.preventDefault();
  console.log("Change in Orientation");
  let deviceData = {
    orientationBase: window.orientation,
    orientation: getDeviceOrientation(),
    deviceWidth: getDeviceWidth()
  };
  appDiv.innerHTML = `${JSON.stringify(deviceData)}`;
});
