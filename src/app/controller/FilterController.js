import User from '../models/User';
import Tool from '../models/Tool';

class FilterController {
  async index(req, res) {
    const { user_id } = req.params;
    const { tag } = req.query;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const tools = await Tool.findAll({ where: { user_id } });

    let user_tool = [''];

    for (let i = 0; i < tools.length; i++) {
      for (let j = 0; j < tools[i].tags.length; j++) {
        if (tools[i].tags[j] === tag) {
          user_tool = tools[i];
        }
      }
    }

    const { id, title, link, description, tags } = user_tool;

    return res.json({
      id,
      title,
      link,
      description,
      tags,
    });
  }
}

export default new FilterController();
