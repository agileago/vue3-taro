/**
 * each project will use the "requester" function when request remote api
 * so this file would be included into your source file when compile
 * */
import type { Project } from 'ts-gear'
import { generateRequestFunctionName } from 'ts-gear/lib/tool/generateRequestFunctionName'
// @ts-ignore
import prettier from '../../.prettierrc'
import * as _ from 'lodash'

// 调用的所有api
const projects: Partial<Project>[] = [
  {
    name: 'abc',
    source: 'http://211.154.163.74:21191/we_uc/openapi_json',
  },
]

/**
 * 生成请求代码样例:
 * (option?: RequestType, config?: AxiosRequestConfig) => requester<ResponseType>('/url', {method: 'post', ...option}, config)
 */
const requestTemplate: Project['generateRequestFunction'] = function (arg) {
  // 适配 fastApi 路径参数需要被path-to-regexp正确解析
  const path = arg.pathname.replace(/{(\w+?)}/g, (s, p1) => `:${p1}`)
  let parameter = arg.parameterTypeName
    ? `option${!arg.parameterRequired ? '?' : ''}: ${arg.parameterTypeName}, `
    : ''
  parameter += 'config?: AxiosRequestConfig'
  const body = `requester<${arg.responseSuccessTypeName}>('${path}', { method: '${
    arg.httpMethod
  }' ${arg.parameterTypeName ? ', ...option' : ''}}, config)`
  return `(${parameter}) => ${body}`
}
function createStandardProjects(projects: Partial<Project>[]) {
  return projects.map(p => {
    const { name } = p
    return {
      dest: '../api',
      keepGeneric: false,
      shouldExportResponseType: false,
      shouldExportRequestOptionType: false,
      shouldForceSkipRequestHeaderOption: true,
      importRequesterStatement: `import { ${
        _.camelCase(name) + 'Requester'
      }, type AxiosRequestConfig } from "../http"`,
      prettierConfig: prettier,
      // 生成请求函数名称
      generateRequestFunctionName(arg) {
        return (
          'api' + _.upperFirst(_.camelCase(name)) + _.upperFirst(generateRequestFunctionName(arg))
        )
      },
      generateRequestFunction: requestTemplate,
      ...p,
    } as Project
  })
}

export default createStandardProjects(projects)
