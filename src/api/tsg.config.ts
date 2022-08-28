/**
 * each project will use the "requester" function when request remote api
 * so this file would be included into your source file when compile
 * */
import type { Project } from 'ts-gear'
// @ts-ignore
import prettier from '../../.prettierrc'

const projects: Project[] = [
  {
    name: 'strapi',
    dest: '../api',
    source: 'http://localhost:8080/swagger-json',
    keepGeneric: false,
    shouldForceSkipRequestHeaderOption: true,
    shouldExportRequestOptionType: false,
    shouldExportResponseType: false,
    importRequesterStatement: `import { lowcode, AxiosRequestConfig } from "../http"`,
    prettierConfig: prettier,
    generateRequestFunction(arg) {
      let parameter = arg.parameterTypeName
        ? `option${!arg.parameterRequired ? '?' : ''}: ${arg.parameterTypeName}, `
        : ''
      parameter += 'config?: AxiosRequestConfig'
      const body = `requester<${arg.responseSuccessTypeName}>('${arg.pathname}', { method: '${
        arg.httpMethod
      }' ${arg.parameterTypeName ? ', ...option' : ''}}, config)`
      return `(${parameter}) => ${body}`
    },
  },
]

export default projects
