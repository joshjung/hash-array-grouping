![](https://nodei.co/npm/hasharray-grouping.png?downloads=True&stars=True)

HashArrayGrouping
=================

This is an extension of the [hasharray](http://www.npmjs.org/hasharray). It provides automated grouping of all added items by the groupFields you specify.

Example
=======

    var HashArrayGrouping = require('hasharray-grouping');
    
		var hag = new HashArrayGrouping(['city', 'state'], 'state');
    
    var salina, wichita;
    
    items = [
      (wichita = {city: 'wichita', state: 'kansas'}),
      {city: 'hutchinson', state: 'kansas'},
      (salina = {city: 'salina', state: 'kansas'}),
      {city: 'hays', state: 'kansas'},
      {city: 'chicago', state: 'illinois'},
      {city: 'los angeles', state: 'california'}
    ];

    hag.addAll(items);
    
    console.log(hag.group['state']['kansas'][0] == wichita); // true
    console.log(hag.group['state']['kansas'][2] == salina); // true

Testing
=======

    mocha

License
=======

The MIT License (MIT)

Copyright (c) 2014 Joshua Jung

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
