var msgContainer = $('#bubbles')
var date = new Date().toUTCString()

//Start of user message
$('body').on('keypress', (e) => {
  if (e.key === 'Enter') {
    var inputMsg = $('#chat').val()
    if (inputMsg !== '') {
      var userMsg = $('<p>')
      userMsg.attr('id', 'first-user')
      userMsg.html(inputMsg)
      msgContainer.append(userMsg)
      $('#chat').val("")
      var userDate = $('<p>')
      userDate.attr('id', 'first-date')
      userDate.html(`<em>Sent at ${date}</em>`)
      msgContainer.append(userDate)
 // Randomization of bot response
      let botResponse = ''
        switch (Math.floor(Math.random() * 4)) {
    case 0:
      botResponse = 'Hello!'
      break
    case 1:
      botResponse = 'You are right!'
      break
    case 2:
      botResponse = 'Wow, thats great to hear!'
      break
    case 3:
      botResponse = 'Interesting. Carry on.'
      break
    case 4:
      botResponse = "I'm doing good, how about you?"
      break
  }
// Start of bot message
      var botMsg = $('<p>')
      botMsg.attr('id', 'second-user')
      botMsg.html(botResponse)
      msgContainer.append(botMsg)
      var botDate = $('<p>')
      botDate.attr('id', 'second-date')
      botDate.html(`<em>Sent at ${date}</em>`)
      msgContainer.append(botDate)
    }
  }
})