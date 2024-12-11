const parseName = name => (name ? `${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}` : 'World')

const hello = name => `Hello, ${parseName(name)}!`
