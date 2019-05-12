function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  let next = "There is nobody waiting to be served!"
  if(line.length>0) {
    next = `Currently serving ${line[0]}.`;
    line.shift();
  }
  return next;
}
