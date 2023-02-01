$(document).ready(function() {
  $("#myAPI").submit(function(event) {
    event.preventDefault();
    // Get the form data from the HTML form
    /* var model = $('#model').val();*/
    var webPrompt = $('#prompt').val();/*
        var temperature = $('#temperature').val();
        var max_tokens = $('#max_tokens').val();
        var top_p = $('#top_p').val();
        var frequency_penalty = $('#frequency_penalty').val();
        var presence_penalty = $('#presence_penalty').val();
        var apiKey = "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";*/

    // Send the request to OpenAI with the form data
    console.log("End Variables have been stored");

    console.log("running function: sendQueryToOpenAI()");
    const sendQueryToOpenAI = async (prompt, model) => {
      const apiKey = "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";//process.env.OPENAI_API_KEY;
      const queryData = {
        prompt: prompt,
        /*model: model,*/ //can't send engine and model in same post request.seding post request direct to davinci
        temperature: 1.0,//0.5
        max_tokens: 100
      };

      try {
        const response = await fetch("https://api.openai.com/v1/engines/davinci/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
          },
          body: JSON.stringify(queryData)
        });

        const data = await response.json();
        console.log(JSON.stringify(data));
        console.log(data);
        $("#response_from_ChatGPT").html(data.choices[0].text);


      } catch (error) {
        console.error(error);
      }
    }

    // Example usage of the function
    sendQueryToOpenAI(webPrompt, "text-davinci-002");

  });
});
