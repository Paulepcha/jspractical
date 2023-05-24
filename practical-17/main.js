// checks whether the SpeechRecognition object is supported in the current browser.
      //If it is not, it tries to use the webkitSpeechRecognition
      //object instead (which is supported in some older versions of Chrome).

      /*create a new instance of the SpeechRecognition object and set some properties on it.
      The interimResults property has to be  set to true, which means that the
      object will return interim results
      as the user speaks.
      The lang property is set to "en-US", which specifies
      the language that the object should recognize.*/

      //Create a paragraph and append it to the class word declared in the HTML

      // add an event listener to the recognition object with result as a event

      // create a if statement to detect if the user has finished speaking
      // then display the result by appending it to the created p element

      // create a event listener if the object has stopped listening

      // start listening to the user again  

      window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

      const recognition = new SpeechRecognition();
      
      recognition.interimResults = true;
      recognition.lang = "ja-jp"; // Specify the language code, e.g., "en" for English
      
      let p = document.createElement("p");
      const words = document.querySelector(".words");
      
      words.appendChild(p);
      
      recognition.addEventListener("result", (e) => {
        const transcript = Array.from(e.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");
      
        p.textContent = transcript;
      
        if (e.results[e.results.length - 1].isFinal) {
          p = document.createElement("p");
          words.appendChild(p);
        }
      });
      
      recognition.addEventListener("end", () => {
        recognition.start();
      });
      
      recognition.start(); 