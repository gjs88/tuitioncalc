$.ajax(
  {
    //needs to be changed to where the json file is being uploaded on the server
    url: 'https://bdb253.github.io/HRJsonProject/DeptData.json',
    dataType: 'json',
    success:function(data)
    {
      //iterate over the data and append a select option
      $.each(data, function(key, val)
      {
        var option = $('<option id="' + val.DeptID + '">' + val.DeptDescr + '</option>');
        $('#DeptSelect').append(option);
      })
    },
    error:function()
    {
      //if there is an error aapend a 'none avaliable' option
      $('#DeptSelect').append('<option id="-1">NONE AVAILABLE</option>');
    }
  })

  

  function showInfo()
  {
    //clear previous results
    $('#result1').html('');
    

    //get the id of the select
    var id = $('#DeptSelect').val()

    //display all the relevant data for the department
    employeeRelations(id);
    compensation(id)
    employment(id);
    employeePay(id);
  }

  function employeeRelations(id)
  {
    //display section header
    $('#result1').append("<h2>Employment Relations</h2>"+
    '<ul><li>Problem solving for employees and managers on Human Resource issues</li>'+
    '<li>Organizational effectiveness</li>'+
    '<li>Performance appraisals and performance concerns</li>'+
    '<li>Disciplinary actions</li>'+
    '<li>NAU Human Resources and ABOR personnel policy interpretation</li>'+
    '<li>Compliance with federal and state law</li></ul>');

    $.getJSON('https://bdb253.github.io/HRJsonProject/DeptData.json', function(data)
    {
      $.each(data, function(key, val)
      {
        //dispaly the correct people based off drop down
        if(id == val.DeptDescr)
        {
          var person1 = '<p>' + val["Employee Relations1"] + '<br>' +'title'+ '<br>' + 'email' + '<br>' + 'phone' + '</p>';
          var person2 = '<p>' + val["Employee Relations2"] + '<br>' +'title'+ '<br>' + 'email' + '<br>' + 'phone' + '</p>';
          $('#result1').append(person1 + '<br>' + person2);
        }
      });

    });
  }



