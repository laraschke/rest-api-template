module.exports = {
  apps: [
    {
      name: 'restApi',
      script: 'npm',
      args: 'start',
      exp_backoff_restart_delay: 100,
      out_file: './logs/rest-out.log',
      error_file: './logs/rest-error.log',
      log_file: './logs/rest-combined.log',
      combine_logs: true,
    },
  ],
};
