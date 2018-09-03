'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Service = function Service(config) {
  var _this = this;

  _classCallCheck(this, Service);

  Object.defineProperty(this, 'makeRESTRequest', {
    enumerable: true,
    writable: true,
    value: async function value(path, options) {
      uri = '' + _this.url + path;

      if (!_lodash2.default.isEmpty(options.query)) {
        uri += '?' + _querystring2.default.stringify(options.query);
      }

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
    value: function value(path) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options.method = 'GET';
      return _this.makeRESTRequest(path, options);
    }
  });
  Object.defineProperty(this, 'post', {
    enumerable: true,
    writable: true,
    value: function value(path) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options.method = 'POST';
      return _this.makeRESTRequest(path, options);
    }
  });
  Object.defineProperty(this, 'put', {
    enumerable: true,
    writable: true,
    value: function value(path) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJTZXJ2aWNlIiwiY29uZmlnIiwicGF0aCIsIm9wdGlvbnMiLCJ1cmkiLCJ1cmwiLCJfIiwiaXNFbXB0eSIsInF1ZXJ5IiwicXMiLCJzdHJpbmdpZnkiLCJqc29uIiwiZGVidWciLCJEYXRlIiwic2VydmljZU5hbWUiLCJKU09OIiwicmVzdWx0IiwibWV0aG9kIiwibWFrZVJFU1RSZXF1ZXN0IiwiY29uc29sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFVBQ0YsaUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWFGLHFCQUFRQyxJQUFSLEVBQWNDLE9BQWQsRUFBMkI7QUFDM0NDLGlCQUFTLE1BQUtDLEdBQWQsR0FBb0JILElBQXBCOztBQUVBLFVBQUcsQ0FBQ0ksaUJBQUVDLE9BQUYsQ0FBVUosUUFBUUssS0FBbEIsQ0FBSixFQUE4QjtBQUM1QkoscUJBQVdLLHNCQUFHQyxTQUFILENBQWFQLFFBQVFLLEtBQXJCLENBQVg7QUFDRDs7QUFFREwsY0FBUUMsR0FBUixHQUFjQSxHQUFkO0FBQ0FELGNBQVFRLElBQVIsR0FBZSxJQUFmOztBQUVBLFlBQUtDLEtBQUwsQ0FBYyxJQUFJQyxJQUFKLEVBQWQsa0JBQXFDLE1BQUtDLFdBQTFDLDJCQUE2RUMsS0FBS0wsU0FBTCxDQUFlUCxPQUFmLEVBQXdCLElBQXhCLEVBQThCLENBQTlCLENBQTdFOztBQUVBLFVBQU1hLFNBQVMsTUFBTSw4QkFBUWIsT0FBUixDQUFyQjs7QUFFQSxZQUFLUyxLQUFMLENBQWMsSUFBSUMsSUFBSixFQUFkLGtCQUFxQyxNQUFLQyxXQUExQyw4QkFBZ0ZDLEtBQUtMLFNBQUwsQ0FBZU0sTUFBZixFQUF1QixJQUF2QixFQUE2QixDQUE3QixDQUFoRjs7QUFFQSxhQUFPQSxNQUFQO0FBQ0Q7QUE5Qm1CO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FnQ2QsZUFBRWQsSUFBRixFQUEwQjtBQUFBLFVBQWxCQyxPQUFrQix1RUFBUixFQUFROztBQUM5QkEsY0FBUWMsTUFBUixHQUFpQixLQUFqQjtBQUNBLGFBQU8sTUFBS0MsZUFBTCxDQUFzQmhCLElBQXRCLEVBQTRCQyxPQUE1QixDQUFQO0FBQ0Q7QUFuQ21CO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FxQ2IsZUFBRUQsSUFBRixFQUEwQjtBQUFBLFVBQWxCQyxPQUFrQix1RUFBUixFQUFROztBQUMvQkEsY0FBUWMsTUFBUixHQUFpQixNQUFqQjtBQUNBLGFBQU8sTUFBS0MsZUFBTCxDQUFzQmhCLElBQXRCLEVBQTRCQyxPQUE1QixDQUFQO0FBQ0Q7QUF4Q21CO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0EwQ2QsZUFBRUQsSUFBRixFQUEwQjtBQUFBLFVBQWxCQyxPQUFrQix1RUFBUixFQUFROztBQUM5QkEsY0FBUWMsTUFBUixHQUFpQixLQUFqQjtBQUNBLGFBQU8sTUFBS0MsZUFBTCxDQUFzQmhCLElBQXRCLEVBQTRCQyxPQUE1QixDQUFQO0FBQ0Q7QUE3Q21COztBQUNsQixNQUFHRixNQUFILEVBQVc7QUFDUCxTQUFLSSxHQUFMLEdBQVdKLE9BQU9JLEdBQWxCO0FBQ0g7QUFDRCxPQUFLSixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxPQUFLYSxXQUFMLEdBQW1CLEtBQUtiLE1BQUwsQ0FBWWEsV0FBWixJQUEyQixHQUE5Qzs7QUFFQSxNQUFHYixVQUFVQSxPQUFPVyxLQUFQLElBQWdCLElBQTdCLEVBQW1DO0FBQ2pDLFNBQUtBLEtBQUwsR0FBYU8sUUFBUVAsS0FBckI7QUFDRCxHQUZELE1BR0ssS0FBS0EsS0FBTCxHQUFhLFlBQU0sQ0FBRSxDQUFyQjtBQUNOLENBWkw7O2tCQWtEZVosTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gJ3JlcXVlc3QtcHJvbWlzZSc7XG5pbXBvcnQgcXMgZnJvbSAncXVlcnlzdHJpbmcnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgU2VydmljZSA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgIGlmKGNvbmZpZykge1xuICAgICAgICAgIHRoaXMudXJsID0gY29uZmlnLnVybDtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgdGhpcy5zZXJ2aWNlTmFtZSA9IHRoaXMuY29uZmlnLnNlcnZpY2VOYW1lIHx8IFwiIFwiO1xuXG4gICAgICBpZihjb25maWcgJiYgY29uZmlnLmRlYnVnID09IHRydWUpIHtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IGNvbnNvbGUuZGVidWc7XG4gICAgICB9XG4gICAgICBlbHNlIHRoaXMuZGVidWcgPSAoKSA9PiB7fTtcbiAgICB9XG5cbiAgICBtYWtlUkVTVFJlcXVlc3QgPSBhc3luYyAoIHBhdGgsIG9wdGlvbnMgKSA9PiB7XG4gICAgICB1cmkgPSBgJHt0aGlzLnVybH0ke3BhdGh9YDtcbiAgICAgIFxuICAgICAgaWYoIV8uaXNFbXB0eShvcHRpb25zLnF1ZXJ5KSkge1xuICAgICAgICB1cmkgKz0gYD8ke3FzLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KX1gXG4gICAgICB9XG4gICAgICBcbiAgICAgIG9wdGlvbnMudXJpID0gdXJpO1xuICAgICAgb3B0aW9ucy5qc29uID0gdHJ1ZTtcblxuICAgICAgdGhpcy5kZWJ1ZyhgJHtuZXcgRGF0ZSgpfSBbU2VydmljZSAke3RoaXMuc2VydmljZU5hbWV9XTo6IE1BS0lORyBSRVFVRVNUOiBgLCBKU09OLnN0cmluZ2lmeShvcHRpb25zLCBudWxsLCA0KSk7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3Qob3B0aW9ucyk7XG5cbiAgICAgIHRoaXMuZGVidWcoYCR7bmV3IERhdGUoKX0gW1NlcnZpY2UgJHt0aGlzLnNlcnZpY2VOYW1lfV06OiBSRUNFSVZFRCBSRVNQT05TRTogYCwgSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCA0KSk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2V0ID0gKCBwYXRoLCBvcHRpb25zID0ge30gKSA9PiB7XG4gICAgICBvcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuICAgICAgcmV0dXJuIHRoaXMubWFrZVJFU1RSZXF1ZXN0KCBwYXRoLCBvcHRpb25zICk7XG4gICAgfVxuXG4gICAgcG9zdCA9ICggcGF0aCwgb3B0aW9ucyA9IHt9ICkgPT4ge1xuICAgICAgb3B0aW9ucy5tZXRob2QgPSAnUE9TVCc7XG4gICAgICByZXR1cm4gdGhpcy5tYWtlUkVTVFJlcXVlc3QoIHBhdGgsIG9wdGlvbnMgKTtcbiAgICB9XG5cbiAgICBwdXQgPSAoIHBhdGgsIG9wdGlvbnMgPSB7fSApID0+IHtcbiAgICAgIG9wdGlvbnMubWV0aG9kID0gJ1BVVCc7XG4gICAgICByZXR1cm4gdGhpcy5tYWtlUkVTVFJlcXVlc3QoIHBhdGgsIG9wdGlvbnMgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU2VydmljZTtcbiJdfQ==