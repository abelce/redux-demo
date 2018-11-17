import * as React from 'react';

interface IReactDisqus {
  shortname: string;
  url: string;
  identifier: string;
}

const DISQUS_CONFIG = [
  'shortname',
  'identifier',
  'title',
  'url',
  'category_id',
  'onNewComment',
  'language',
];

const setParams = function(context: Object, source: Object) {
  let { onNewComment, language, ...reset } = source;
  for (let [key, value] in Object.entries(reset)) {
    context[key] = value;
  }
  context.language = language;
  if (onNewComment) {
    context.callbacks = {
      onNewComment: [onNewComment],
    };
  }
};

class ReactDisqus extends React.Component<IReactDisqus> {
  componentDidMount() {
    this.load();
  }

  setConfig = () => {
    const { props } = this;
    window.disqus_config = function() {
      setParams(this, props);
    };
  };

  addDisqusScript = () => {
    if (window[Symbol.for('disqus')] === true) {
      return;
    }

    const child = (this.disqus = document.createElement('script'));
    const parent =
      document.getElementsByTagName('head')[0] ||
      document.getElementsByTagName('body')[0];

    child.async = true;
    child.type = 'text/javascript';
    child.src = `https://${this.props.shortname}.disqus.com/embed.js`;

    parent.appendChild(child);

    window[Symbol.for('disqus')] = true;
  };

  load = () => {
    // DISQUS存在, reload就可以了
    if (typeof DISQUS !== 'undefined') {
      this.reset();
    } else {
      this.setConfig();
      this.addDisqusScript();
    }
  };
  reset = () => {
    const { props } = this;
    DISQUS.reset({
      reload: true,
      config: function() {
        setParams(this, props);
      },
    });
  };

  render() {
    return <div id="disqus_thread" />;
  }
}

export default ReactDisqus;
