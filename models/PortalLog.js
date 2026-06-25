const mongoose = require('mongoose');

const portalLogSchema = new mongoose.Schema({
    portal: { type: String, required: true, index: true },  // e.g. "hr", "finance", "transport", etc.
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    userName: { type: String, required: true },
    userEmpId: { type: String, required: true },
    loginTime: { type: Date, default: Date.now },
    logoutTime: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('PortalLog', portalLogSchema);
