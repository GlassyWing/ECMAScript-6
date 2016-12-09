/**
 * Created by manlier on 2016/11/30.
 */
var template = `
<ul>
  <% for(var i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;

function compile(template) {
    var evalExpr = /<%=(.+?)%>/g;
    var expr = /<%([\s\S]+?)%>/g;

    template = template
        .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
        .replace(expr, '`); \n $1 \n  echo(`');
    template = "echo(`" + template + "`);";

    return `(function parse(data) {
        var output = "";
        
        function echo(html) {
            output += html;
        }
        
        ${template}
        
        return output;
    })`;
}

var parse = eval(compile(template));
console.log(parse.toString())
console.log(
    parse({ supplies: [ "broom", "mop", "cleaner" ] })
);