require('dotenv').config()
const axios = require('axios')

class Controller {
  static async ping(req, res) {
    return res.status(200).send({ message: "Pong" })
  }

  static async getUser(req, res) {
    const { name } = req.params;
    try {
      const response = await axios.get(`https://api.github.com/search/users`, {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
        },
        params: {
          q: `${name} in:login`
        }
      });
      res.status(200).send(response.data.items);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }

  static async getAllUsers(req, res) {
    const since = req.query.since || 0

    try {
      const response = await axios.get('https://api.github.com/users', {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
        },
        params: {
          since: since
        }
      })

      res.status(200).send(response.data)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  }

  static async getDetailsUser(req, res) {
    const { username } = req.params

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
        }
      })

      res.status(200).send(response.data)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  }

  static async getReposUser(req, res) {
    const { username } = req.params

    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
        }
      })

      const publicRepos = response.data.filter(repos => repos.private === false)
      
      res.status(200).send(publicRepos)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  }
}

module.exports = Controller
