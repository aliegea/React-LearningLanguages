function SwitchClass(arr, style) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].className.includes(style)) {
      arr[i].classList.remove(style);
    }
  }
}

export default SwitchClass;
