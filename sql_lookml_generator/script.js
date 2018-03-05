// from clipboard.js - copy results
new Clipboard('.btn');

// get user variables
function catchData() {
  var rows = $('#rows').val();
  var str_columns = $('#str_columns').val();
  var nr_columns = $('#nr_columns').val();
  var wrap_in_lookml = $('#wrap_in_lookml').val();
  var allow_nulls = $('#allow_nulls').val();
  generateSQL(rows, str_columns, nr_columns);
}

// generate the sql and lookml
function generateSQL(rows, str_columns, nr_columns) {
  var column_string_names = ["column_A", "column_B", "column_C"];
  var column_number_names = ["column_1", "column_2", "column_3"];
  var strings_A = ["Lorem", "ipsum", "dolor", "sit"];
  var strings_B = ["augue justo scelerisque erat",
    "nec eleifend lorem est eu justo", "Nullam luctus tempus quam",
    "nec finibus ante faucibus sit amet", "Nunc tempus"
  ];
  var strings_C = ["mi ac euismod lobortis", "dui magna aliquam metus",
    "quis interdum lacus diam ac tellus", "Mauris enim augue",
    "elementum vitae arcu sed", "commodo elementum sem",
    "Fusce volutpat est mauris"
  ];
  var numbers = Array.from({
    length: 1000
  }, () => Math.floor(Math.random() * 100));
  var big_numbers = Array.from({
    length: 10000
  }, () => Math.floor(Math.random() * 1000));
  var bigger_numbers = Array.from({
    length: 10000
  }, () => Math.floor(Math.random() * 1000));
  if ($('#allow_nulls').is(":checked")) {
    for (var i = 0; i < 1000; i++) {
      numbers.push(null);
      big_numbers.push(null);
      bigger_numbers.push(null);
    }
  }
  var columns_sql = "";
  var lookml_dims = "";
  var lookml_measures = "";
  // define lookml strings
  var lookml_dim =
    `dimension: %s {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;type: string<br>
    &nbsp;&nbsp;&nbsp;&nbsp;sql: \${TABLE}.%s ;;<br>
}<br>`;
  var lookml_count =
    `measure: count {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;type: count<br>
}<br>`;
  var lookml_sum =
    `measure: %s_sum {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;type: sum<br>
    &nbsp;&nbsp;&nbsp;&nbsp;sql: \${TABLE}.%s ;;<br>
}<br>`;
  var cstn1, cstn2, cstn3, cnrn1, cnrn2, cnrn3, lkml_stn1, lkml_stn2, lkml_stn3,
    lkml_nrn1, lkml_nrn2, lkml_nrn3;
  // string columns
  if (str_columns == 0) {
    //console.log("meh");
  } else if (str_columns == 1) {
    i = 0 // Math.floor(Math.random()*column_string_names.length); // get random column name
    cstn1 = column_string_names[i]; // set column name
    lookml_dims += sprintf(lookml_dim, [cstn1]) + "<br>";
  } else if (str_columns == 2) {
    i = 0 //Math.floor(Math.random()*column_string_names.length); // get random column name
    cstn1 = column_string_names[i]; // set column name
    lookml_dims += sprintf(lookml_dim, [cstn1]) + "<br>";
    i = 1 //Math.floor(Math.random()*column_string_names.length); // get random column name
    cstn2 = column_string_names[i]; // set column name
    lookml_dims += sprintf(lookml_dim, [cstn2]);
  } else if (str_columns == 3) {
    i = 0 // Math.floor(Math.random()*column_string_names.length); // get random column name
    cstn1 = column_string_names[i]; // set column name
    lookml_dims += sprintf(lookml_dim, [cstn1]) + "<br>";
    i = 1 //Math.floor(Math.random()*column_string_names.length); // get random column name
    cstn2 = column_string_names[i]; // set column name
    lookml_dims += sprintf(lookml_dim, [cstn2]) + "<br>";
    i = 2 //Math.floor(Math.random()*column_string_names.length); // get random column name
    cstn3 = column_string_names[i]; // set column name
    lookml_dims += sprintf(lookml_dim, [cstn3]) + "<br>";
  }
  // number columns
  if (str_columns == 0) {
    //console.log("meh");
  } else if (nr_columns == 1) {
    i = 0 //Math.floor(Math.random()*column_number_names.length); // get random column name
    cnrn1 = column_number_names[i]; // set column name
    lookml_measures += lookml_count + "<br>";
    lookml_measures += sprintf(lookml_sum, [cnrn1]) + "<br>";
  } else if (nr_columns == 2) {
    i = 0 //Math.floor(Math.random()*column_number_names.length); // get random column name
    cnrn1 = column_number_names[i]; // set column name
    lookml_measures += lookml_count + "<br>";
    lookml_measures += sprintf(lookml_sum, [cnrn1]) + "<br>";
    i = 1 //Math.floor(Math.random()*column_number_names.length); // get random column name
    cnrn2 = column_number_names[i]; // set column name
    lookml_measures += sprintf(lookml_sum, [cnrn2]) + "<br>";
  } else if (nr_columns == 3) {
    i = 0 //Math.floor(Math.random()*column_number_names.length); // get random column name
    cnrn1 = column_number_names[i]; // set column name
    lookml_measures += lookml_count + "<br>";
    lookml_measures += sprintf(lookml_sum, [cnrn1]) + "<br>";
    i = 1 //Math.floor(Math.random()*column_number_names.length); // get random column name
    cnrn2 = column_number_names[i]; // set column name
    lookml_measures += sprintf(lookml_sum, [cnrn2]) + "<br>";
    i = 2 //Math.floor(Math.random()*column_number_names.length); // get random column name
    cnrn3 = column_number_names[i]; // set column name
    lookml_measures += sprintf(lookml_sum, [cnrn3]) + "<br>";
  }

  function generateValues(str_columns, nr_columns) {
    var sql_str_columns = "";
    if (str_columns == 1) {
      cstn1_v = '"' + strings_A[Math.floor(Math.random() * strings_A.length)] +
        '" AS ';
      sql_str_columns = cstn1_v + cstn1;
    } else if (str_columns == 2) {
      cstn1_v = '"' + strings_A[Math.floor(Math.random() * strings_A.length)] +
        '" AS ';
      cstn2_v = '"' + strings_B[Math.floor(Math.random() * strings_B.length)] +
        '" AS ';
      sql_str_columns = cstn1_v + cstn1 + ", " + cstn2_v + cstn2;
    } else if (str_columns == 3) {
      cstn1_v = '"' + strings_A[Math.floor(Math.random() * strings_A.length)] +
        '" AS ';
      cstn2_v = '"' + strings_B[Math.floor(Math.random() * strings_B.length)] +
        '" AS ';
      cstn3_v = '"' + strings_C[Math.floor(Math.random() * strings_C.length)] +
        '" AS ';
      sql_str_columns = cstn1_v + cstn1 + ", " + cstn2_v + cstn2 + ", " +
        cstn3_v + cstn3;
    }
    var sql_nr_columns = "";
    if (nr_columns == 1) {
      cnrn1_v = numbers[Math.floor(Math.random() * numbers.length)] + ' AS ';
      sql_nr_columns = cnrn1_v + cnrn1;
    } else if (nr_columns == 2) {
      cnrn1_v = numbers[Math.floor(Math.random() * numbers.length)] + ' AS ';
      cnrn2_v = big_numbers[Math.floor(Math.random() * big_numbers.length)] +
        ' AS ';
      sql_nr_columns = cnrn1_v + cnrn1 + ", " + cnrn2_v + cnrn2;
    } else if (nr_columns == 3) {
      cnrn1_v = numbers[Math.floor(Math.random() * numbers.length)] + ' AS ';
      cnrn2_v = big_numbers[Math.floor(Math.random() * big_numbers.length)] +
        ' AS ';
      cnrn3_v = bigger_numbers[Math.floor(Math.random() * bigger_numbers.length)] +
        ' AS ';
      sql_nr_columns = cnrn1_v + cnrn1 + ", " + cnrn2_v + cnrn2 + ", " +
        cnrn3_v + cnrn3;
    }
    var columns_sql = sql_str_columns + ", " + sql_nr_columns
    columns_sql = (nr_columns == 0 ? columns_sql.substring(0, columns_sql.length -
      2) : columns_sql);
    return columns_sql;
  }
  var sql_query = "";
  var lookml = lookml_dims + lookml_measures + "}";
  for (i = 0; i < rows; i++) {
    var union_sql = (rows > 1 ? "<br>&nbsp&nbsp&nbsp&nbspUNION ALL<br>" : "");
    sql_query += "&nbsp;&nbsp;SELECT " + generateValues(str_columns, nr_columns) +
      union_sql;
  }
  sql_query = sql_query.toString();
  sql_query = (rows > 1 ? sql_query.substring(0, sql_query.length - 28) :
    sql_query);
  sql_query = (str_columns == 0 ? sql_query.replace(', ', '') : sql_query);
  if ($('#wrap_in_lookml').is(":checked")) {
    lookml_wrapper =
      `view: derived_table_name {<br>
  derived_table: {<br>
    sql:<br>
    `;
    sql_query = lookml_wrapper + sql_query + "<br><br>;;<br>}<br><br>";
  }
  $("#sg-generated").html(sql_query);
  if ($('#wrap_in_lookml').is(":checked")) {
    $("#sg-generated").append(lookml);
  }
}

function sprintf(template, value) {
  return template.replace(/%s/g, function() {
    return value;
  });
}
