(function()
{
    "use strict"

    if (typeof Object.deepAssign == "function") return

    var isEnumerable = {}.propertyIsEnumerable

    Object.defineProperty(Object, "deepAssign",
    {
        value: function deepAssign(target, sources)
        {
            if (target == null) throw new TypeError('Null')

            var to = new target.constructor(target)

            for (var index = 1; index < arguments.length ;)
            {
                var from = arguments[index++]
                if (from !== Object(from)) continue


                Reflect.ownKeys(from).forEach(function(key) {
                  if (isEnumerable.call(from, key)) {
                    if (from[key] instanceof Object){
                      to[key] = Object.deepAssign(to[key], from[key])
                    } else {
                      to[key] = from[key]
                    }
                  }
                });
            }

            return to
        },
        writable: true,
        configurable: true
    })
})()
