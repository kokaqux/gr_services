import request from 'request-promise';

const Service = class {
    constructor(config) {
      if(config) {
          this.url = config.url;
      }
      this.config = config;
      this.serviceName = this.config.serviceName || " ";

      if(config && config.debug == true) {
        this.debug = console.debug;
      }
      else this.debug = () => {};
    }

    makeRESTRequest = async ( path, options ) => {
      const uri = `${this.url}${path}`;
      options.uri = uri;
      options.json = true;

      this.debug(`${new Date()} [Service ${this.serviceName}]:: MAKING REQUEST: `, JSON.stringify(options, null, 4));

      const result = await request(options);

      this.debug(`${new Date()} [Service ${this.serviceName}]:: RECEIVED RESPONSE: `, JSON.stringify(result, null, 4));

      return result;
    }

    get = ( path, options ) => {
      options.method = 'GET';
      return this.makeRESTRequest( path, options );
    }

    post = ( path, options ) => {
      options.method = 'POST';
      return this.makeRESTRequest( path, options );
    }

    put = ( path, options ) => {
      options.method = 'PUT';
      return this.makeRESTRequest( path, options );
    }
}


export default Service;
