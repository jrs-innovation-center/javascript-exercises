Add Select Locations

create select-model base

```

const React = require('react')

const ModelSelect = React.createClass({
  getInitialState: function() {
    return {
      items: [{id: "-1", name: "Choose"}]
    }
  },
  componentDidMount() {
    this.props.allDocs((e, items) => {
      if (e) return console.log(e.message)
      this.setState({items: [].concat(this.state.items, items)})
    })
  },
  render() {
    const labelStyle = {display: 'block'}

    const option = item => <option value={item.id}>{item.name}</option>

    return (
      <div>
        <label style={labelStyle}>{this.props.label}</label>
        <select
          value={this.props.value}
          onChange={this.props.onChange}>
          {this.state.items.map(option)}
        </select>
      </div>
    )
  }
})

module.exports = ModelSelect
```



add select model base to form

```
const Service = require('../../components/service')
const ModelSelect = require('../../components/model-select')
const LocationSelect = Service(ModelSelect, 'locations')

<LocationSelect
  label="Locations"
  value={this.state.effort.location_id}
  onChange={this.handleChange('location_id')}
/>

```

// <TextField />
// <TextField />
// <TextField />
// <LocationSelect />


```
const React = require('react')

const TextField = React.createClass({
  render () {
    const labelStyle = {display: 'block', color: 'green'}

    return (
      <div>
        <label style={labelStyle}>{this.props.label}</label>
        <input type="text"
          value={this.props.value}
          onChange={this.props.onChange} />
      </div>
    )
  }
})

module.exports = TextField

```

```
<TextField label="Name"
  value={this.state.effort.name}
  onChange={this.handleChange('name')}
/>
```

---

efforts - show.js

```
const Service = require('../../components/service')
const LocationShowBase = require('./location-show')
const LocationShow = Service(LocationShowBase, 'locations')

```

---

efforts - location-show.js

```
const React = require('react')

const LocationShow = React.createClass({
  getInitialState: function() {
    return {
      name: 'TODO Location'
    };
  },
  componentDidMount() {
    this.props.get(this.props.id, (err, location) => {
      if (err) return console.log(err.message)
      this.setState(location)
    })
  },
  render() {
    return (
      <p>{this.state.name}</p>
    )
  }
})

module.exports = LocationShow
```
