// =========================================================
// Project: PROJECT-NAME
// =========================================================
// ------------------------------------------ Export Configs
module.exports = {
    production: false, // use to programmatically operate on 
    // gulp tasks based on environment
    // -------------------------------------------- autoprefixer
    autoprefixer: {
        opts: {
            browsers: ['last 3 versions']
        }
    },
    // --------------------------------------------- browsersync
    browsersync: {
        opts: {
            server: './src/'
        },
        watch: [
            './src/assets/styles/css/**/*.css',
            './src/assets/scripts/js/**/*.js',
            './src/**/*.html'
        ]
    },
    // --------------------------------------------------- clean
    clean: {
        folders: [
            './dist/'
        ]
    },
    html: {
        src: ['./src/**/*.html', '!src/assets/bin/**/*'],
        htmlmin: { // In case more html file operations are needed.
            opts: {
                // https://github.com/kangax/html-minifier
                collapseWhitespace: true,
                removeComments: true
            }
        },
        dest: './dist/'
    },
    // ------------------------------------------------ new-task
    newtask: {
        src: [
            "./gulp/utils/newTaskTemplate.js"
        ],
        outputName: "TASK-TEMPLATE.js",
        dest: "./gulp/tasks/"
    },
    // -------------------------------------------------- rename
    rename: {
        min: { suffix: '.min' }
    },
    // ---------------------------------------------------- sass
    sass: {
        src: [
            "./src/sass/main.scss"
        ],
        opts: {}, // add sass options here
        outputName: 'custom.css',
        dest: './dist/'
    },
    // ------------------------------------------------- scripts
    scripts: {
        src: [
            './dist/*.js',
        ],
        dest: './public/js'
    },
    // -------------------------------------------------- styles
    styles: {
        src: [
            './dist/*.css',
        ],
        dest: './public/css'
    },
    // ---------------------------------------------- typescript
    typescript: {
        src: [
            './src/typescript/main.ts'
        ],
        outputName: 'custom.js',
        dest: './dist/',
        opts: {
            noImplicitAny: true
        }
    },

    // ------------------------------------------------- vendors
    vendors: {
        js: {
            src: [
                './bower_components/bootstrap/dist/js/bootstrap.min.js',
                './bower_components/jquery/dist/jquery.min.js',
                './src/assets/bin/bootstrap-4.0.0-alpha/dist/js/bootstrap.min.js'
            ],
            dest: './dist/assets/js/vendors'
        },
        css: {
            src: [
                './bower_components/font-awesome/css/font-awesome.min.css',
                './bower_components/font-awesome/css/font-awesome.css.map',
                './bower_components/bootstrap/dist/css/bootstrap.min.css',
                './bower_components/bootstrap/dist/css/bootstrap.min.css.map'
            ],
            dest: './dist/assets/css/vendors'
        },
        sass: {
            // NOTE: This is to perform operations on the sass files
            src: [
                './bower_components/font-awesome/scss/**/*.scss', // ex
                './src/assets/bin/bootstrap-4.0.0-alpha/scss/**/*.scss' // ex
            ],
            opts: {},
            dest: './dist/assets/css/vendors'
        },
        less: {
            src: [
                './bower_components/bootstrap/less/**/*.less'
            ],
            opts: {},
            dest: './dist/assets/css/vendors'
        },
        fonts: {
            src: [
                './bower_components/bootstrap/fonts/**/*.*',
                './bower_components/font-awesome/fonts/**/*.*'
            ],
            dest: './dist/assets/fonts'
        }
    }
}