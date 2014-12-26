/*
* Simple technique to avoid Defer Parsing of Javascript warning in Google Page Speed and load your website faster
* Developed by Prashant Patel
* Implemented in www.techschooldirectory.com
*
* Just before the end of your body tag, write your place holder div where your javascript will load. In this code its <div id="sitelevel_js"></div>
* Write the script to load your selected JS files in the place holder div
*/
<div id="sitelevel_heavy_js_files"></div>
<script type="text/javascript">

    var ExternalJSFiles = {
        'sitelevel_heavy_js_files':
                'file1.js,file2.js,file3.js'
    };
    for (var i in ExternalJSFiles) {
        var scriptTag = document.createElement('script');
        scriptTag.type = 'text/javascript';
        scriptTag.src = ExternalJSFiles[i];
        document.getElementById(i).appendChild(scriptTag);
    }

</script>
<script