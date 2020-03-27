import User from '../models/User';
import Tool from '../models/Tool';

class ToolController {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: {
        association: 'tools',
        attributes: ['title', 'link', 'description', 'tags', 'id'],
      },
    });

    return res.json(user);
  }

  async store(req, res) {
    const { user_id } = req.params;
    const { title, link, description, tags } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({
        error: 'User not found',
      });
    }

    const tool = await Tool.create({
      title,
      link,
      description,
      tags,
      user_id,
    });

    return res.status(201).json(tool);
  }

  async delete(req, res) {
    const { user_id } = req.params;
    const { id } = req.params;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({
        error: 'User not found',
      });
    }

    const tool = await Tool.findOne({
      where: { id },
    });

    await tool.destroy();

    return res.status(204).json();
  }
}

export default new ToolController();
