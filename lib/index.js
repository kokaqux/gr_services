'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Service = function Service(config) {
  var _this = this;

  _classCallCheck(this, Service);

  Object.defineProperty(this, 'makeRESTRequest', {
    enumerable: true,
    writable: true,
    value: async function value(path, options) {
      var uri = '' + _this.url + path;
      options.uri = uri;
      options.json = true;

      _this.debug(new Date() + ' [Service ' + _this.serviceName + ']:: MAKING REQUEST: ', JSON.stringify(options, null, 4));

      var result = await (0, _requestPromise2.default)(options);

      _this.debug(new Date() + ' [Service ' + _this.serviceName + ']:: RECEIVED RESPONSE: ', JSON.stringify(result, null, 4));

      return result;
    }
  });
  Object.defineProperty(this, 'get', {
    enumerable: true,
    writable: true,
    value: function value(path, options) {
      options.method = 'GET';
      return _this.makeRESTRequest(path, options);
    }
  });
  Object.defineProperty(this, 'post', {
    enumerable: true,
    writable: true,
    value: function value(path, options) {
      options.method = 'POST';
      return _this.makeRESTRequest(path, options);
    }
  });
  Object.defineProperty(this, 'put', {
    enumerable: true,
    writable: true,
    value: function value(path, options) {
      options.method = 'PUT';
      return _this.makeRESTRequest(path, options);
    }
  });

  if (config) {
    this.url = config.url;
  }
  this.config = config;
  this.serviceName = this.config.serviceName || " ";

  if (config && config.debug == true) {
    this.debug = console.debug;
  } else this.debug = function () {};
};

exports.default = Service;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJTZXJ2aWNlIiwiY29uZmlnIiwicGF0aCIsIm9wdGlvbnMiLCJ1cmkiLCJ1cmwiLCJqc29uIiwiZGVidWciLCJEYXRlIiwic2VydmljZU5hbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0IiwibWV0aG9kIiwibWFrZVJFU1RSZXF1ZXN0IiwiY29uc29sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFDRixpQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBYUYscUJBQVFDLElBQVIsRUFBY0MsT0FBZCxFQUEyQjtBQUMzQyxVQUFNQyxXQUFTLE1BQUtDLEdBQWQsR0FBb0JILElBQTFCO0FBQ0FDLGNBQVFDLEdBQVIsR0FBY0EsR0FBZDtBQUNBRCxjQUFRRyxJQUFSLEdBQWUsSUFBZjs7QUFFQSxZQUFLQyxLQUFMLENBQWMsSUFBSUMsSUFBSixFQUFkLGtCQUFxQyxNQUFLQyxXQUExQywyQkFBNkVDLEtBQUtDLFNBQUwsQ0FBZVIsT0FBZixFQUF3QixJQUF4QixFQUE4QixDQUE5QixDQUE3RTs7QUFFQSxVQUFNUyxTQUFTLE1BQU0sOEJBQVFULE9BQVIsQ0FBckI7O0FBRUEsWUFBS0ksS0FBTCxDQUFjLElBQUlDLElBQUosRUFBZCxrQkFBcUMsTUFBS0MsV0FBMUMsOEJBQWdGQyxLQUFLQyxTQUFMLENBQWVDLE1BQWYsRUFBdUIsSUFBdkIsRUFBNkIsQ0FBN0IsQ0FBaEY7O0FBRUEsYUFBT0EsTUFBUDtBQUNEO0FBekJtQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBMkJkLGVBQUVWLElBQUYsRUFBUUMsT0FBUixFQUFxQjtBQUN6QkEsY0FBUVUsTUFBUixHQUFpQixLQUFqQjtBQUNBLGFBQU8sTUFBS0MsZUFBTCxDQUFzQlosSUFBdEIsRUFBNEJDLE9BQTVCLENBQVA7QUFDRDtBQTlCbUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWdDYixlQUFFRCxJQUFGLEVBQVFDLE9BQVIsRUFBcUI7QUFDMUJBLGNBQVFVLE1BQVIsR0FBaUIsTUFBakI7QUFDQSxhQUFPLE1BQUtDLGVBQUwsQ0FBc0JaLElBQXRCLEVBQTRCQyxPQUE1QixDQUFQO0FBQ0Q7QUFuQ21CO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FxQ2QsZUFBRUQsSUFBRixFQUFRQyxPQUFSLEVBQXFCO0FBQ3pCQSxjQUFRVSxNQUFSLEdBQWlCLEtBQWpCO0FBQ0EsYUFBTyxNQUFLQyxlQUFMLENBQXNCWixJQUF0QixFQUE0QkMsT0FBNUIsQ0FBUDtBQUNEO0FBeENtQjs7QUFDbEIsTUFBR0YsTUFBSCxFQUFXO0FBQ1AsU0FBS0ksR0FBTCxHQUFXSixPQUFPSSxHQUFsQjtBQUNIO0FBQ0QsT0FBS0osTUFBTCxHQUFjQSxNQUFkO0FBQ0EsT0FBS1EsV0FBTCxHQUFtQixLQUFLUixNQUFMLENBQVlRLFdBQVosSUFBMkIsR0FBOUM7O0FBRUEsTUFBR1IsVUFBVUEsT0FBT00sS0FBUCxJQUFnQixJQUE3QixFQUFtQztBQUNqQyxTQUFLQSxLQUFMLEdBQWFRLFFBQVFSLEtBQXJCO0FBQ0QsR0FGRCxNQUdLLEtBQUtBLEtBQUwsR0FBYSxZQUFNLENBQUUsQ0FBckI7QUFDTixDQVpMOztrQkE2Q2VQLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICdyZXF1ZXN0LXByb21pc2UnO1xuXG5jb25zdCBTZXJ2aWNlID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgaWYoY29uZmlnKSB7XG4gICAgICAgICAgdGhpcy51cmwgPSBjb25maWcudXJsO1xuICAgICAgfVxuICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICB0aGlzLnNlcnZpY2VOYW1lID0gdGhpcy5jb25maWcuc2VydmljZU5hbWUgfHwgXCIgXCI7XG5cbiAgICAgIGlmKGNvbmZpZyAmJiBjb25maWcuZGVidWcgPT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmRlYnVnID0gY29uc29sZS5kZWJ1ZztcbiAgICAgIH1cbiAgICAgIGVsc2UgdGhpcy5kZWJ1ZyA9ICgpID0+IHt9O1xuICAgIH1cblxuICAgIG1ha2VSRVNUUmVxdWVzdCA9IGFzeW5jICggcGF0aCwgb3B0aW9ucyApID0+IHtcbiAgICAgIGNvbnN0IHVyaSA9IGAke3RoaXMudXJsfSR7cGF0aH1gO1xuICAgICAgb3B0aW9ucy51cmkgPSB1cmk7XG4gICAgICBvcHRpb25zLmpzb24gPSB0cnVlO1xuXG4gICAgICB0aGlzLmRlYnVnKGAke25ldyBEYXRlKCl9IFtTZXJ2aWNlICR7dGhpcy5zZXJ2aWNlTmFtZX1dOjogTUFLSU5HIFJFUVVFU1Q6IGAsIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMsIG51bGwsIDQpKTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxdWVzdChvcHRpb25zKTtcblxuICAgICAgdGhpcy5kZWJ1ZyhgJHtuZXcgRGF0ZSgpfSBbU2VydmljZSAke3RoaXMuc2VydmljZU5hbWV9XTo6IFJFQ0VJVkVEIFJFU1BPTlNFOiBgLCBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDQpKTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBnZXQgPSAoIHBhdGgsIG9wdGlvbnMgKSA9PiB7XG4gICAgICBvcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuICAgICAgcmV0dXJuIHRoaXMubWFrZVJFU1RSZXF1ZXN0KCBwYXRoLCBvcHRpb25zICk7XG4gICAgfVxuXG4gICAgcG9zdCA9ICggcGF0aCwgb3B0aW9ucyApID0+IHtcbiAgICAgIG9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xuICAgICAgcmV0dXJuIHRoaXMubWFrZVJFU1RSZXF1ZXN0KCBwYXRoLCBvcHRpb25zICk7XG4gICAgfVxuXG4gICAgcHV0ID0gKCBwYXRoLCBvcHRpb25zICkgPT4ge1xuICAgICAgb3B0aW9ucy5tZXRob2QgPSAnUFVUJztcbiAgICAgIHJldHVybiB0aGlzLm1ha2VSRVNUUmVxdWVzdCggcGF0aCwgb3B0aW9ucyApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlO1xuIl19