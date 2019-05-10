function takeANumber(line, name) {
  line.push(name) 
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  var person = []
  if (line.length === 0) {
    return `There is nobody waiting to be served!`
  }
  person = line.shift()
  return `Currently serving ${person}.`
}

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`
  }
  var names = []
  for (var i = 0; i < line.length; i++) {
  names.push(`${i + 1}. ${line[i]}`)  
  }
  return `The line is currently: ${names.join(', ')}`
}

/* function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return `There is nobody waiting to be served!`
  }
  var serving = []
  serving = line.shift()
  return `Currently serving ${serving}.`
}

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`
  }
  var current = []
  for (var i = 0; i < line.length; i++) {
    current.push(`${i + 1}. ${line[i]}`)
    
  }
  return `The line is currently: ${current.join(', ')}`
}
*/